import threading
from webbrowser import get
import requests
import json
from flask import Flask
from flask_restful import Resource, Api, reqparse


app = Flask(__name__)
api = Api(app)

url = 'https://qx5ips1b1q-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.5.1)%3B%20Browser%20(lite)%3B%20instantsearch.js%20(4.40.3)%3B%20JS%20Helper%20(3.8.0)&x-algolia-api-key=04636813b7beb6abd08a7e35f8c880a1&x-algolia-application-id=QX5IPS1B1Q'


def get_page(baseUrl):
    return requests.get(baseUrl).text


def get_numPages(page):
    pages = page[page.find("data-numbers"):page.find("data-numbers") + 40]
    return int(pages[:pages.find(">")].split("=")[1].replace('"', ''))


def thread(name, page):
    params = {"requests": [{"indexName": f"{name}IndexAlgoliaPRD", "params": "analytics=true&clickAnalytics=true&hitsPerPage=25&maxValuesPerFacet=20&removeWordsIfNoResults=allOptional&query=&page=" +
                            str(page)+"&facets=%5B%22*%22%5D&tagFilters=&facetFilters=%5B%5B%22hierarchicalcategory_string_mv.lvl1%3ACelulares%20%3E%20Tel%C3%A9fonos%20Celulares%22%5D%5D"}]}
    response = requests.post(url, json=params).json()["results"][0]
    cleaner(response)


def thread1(url, notFirst, indice, page=""):
    query = f"?page={indice}&pageSize=25&sort=relevance"
    if (notFirst):
        page = get_page(url+query)
    dataLayer = page[page.find("GAProductData")+15:page.find(
        "GAProductsComplementaryData")].strip()[:-1]
    dataLayer = dataLayer.strip().replace('"', ' ').replace('name:', '"name":').replace('id:', '"id":').replace('price:', '"price":').replace(
        'previousPrice', '"previousPrice"').replace('brand:', '"brand":').replace('category:', '"category":').replace(
        'variant:', '"variant":').replace('list:', '"list":').replace('position:', '"position":').replace(
        'quantity:', '"quantity":').replace("'", '"')
    res.extend(json.loads(dataLayer))


def cleaner(response):
    temp = []
    for item in response["hits"]:
        dicRes = {"name": item["name_text_es"], "id": item["code_string"],
                  "price": str(item["pricevalue_cop_double"]), "brand": item["brand_string_mv"][0]}
        temp.append(dicRes)
    res.extend(temp)
    print(len(res))


def get_list1(url):
    page = get_page(url+"?page=1&pageSize=25&sort=relevance")
    threads = list()
    thread1("", False, 1, page)
    pages = get_numPages(page)
    for i in range(pages):
        t = threading.Thread(target=thread1, args=(url, True, i + 2))
        threads.append(t)
    [t.start() for t in threads]
    [t.join() for t in threads]


def get_list(name):
    params = {"requests": [{"indexName": f"{name}IndexAlgoliaPRD", "params": "analytics=true&clickAnalytics=true&hitsPerPage=25&maxValuesPerFacet=20&removeWordsIfNoResults=allOptional&query=&page=1&facets=%5B%22*%22%5D&tagFilters=&facetFilters=%5B%5B%22hierarchicalcategory_string_mv.lvl1%3ACelulares%20%3E%20Tel%C3%A9fonos%20Celulares%22%5D%5D"}]}
    response = requests.post(url, json=params).json()["results"][0]
    cleaner(response)
    threads = list()
    pages = response["nbPages"]
    for i in range(1, pages):
        t = threading.Thread(target=thread, args=(name, i + 1))
        threads.append(t)
    [t.start() for t in threads]
    [t.join() for t in threads]


class WebScrapingAPI(Resource):

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', required=True)
        parser.add_argument('product', required=True)
        args = parser.parse_args()
        name = args['name'].lower()
        product = int(args['product'])
        global res
        res = list()
        print(product)
        print(name)
        get_list(name)

        return res


class WebScraping(Resource):

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('url', required=True)
        parser.add_argument('product', required=True)
        args = parser.parse_args()
        url = args['url']
        product = int(args['product'])
        global res
        res = list()
        print(product)
        print(url)
        if (product == 0):
            get_list1(url)
        else:
            thread("", False, 1, get_page(url))

        return res


api.add_resource(WebScraping, '/api/v2/scraping')
api.add_resource(WebScrapingAPI, '/api/v2/scrapingAPI')
if __name__ == '__main__':
    app.run(debug=True)
