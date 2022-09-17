import threading
import requests
import json
from flask import Flask
from flask_restful import Resource, Api, reqparse


app = Flask(__name__)
api = Api(app)


def get_page(baseUrl):
    return requests.get(baseUrl).text


def get_numPages(page):
    pages = page[page.find("data-numbers"):page.find("data-numbers") + 40]
    return int(pages[:pages.find(">")].split("=")[1].replace('"', ''))


def thread(url, notFirst, indice, page=""):
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


def get_list(url):
    page = get_page(url+"?page=1&pageSize=25&sort=relevance")
    threads = list()
    thread("", False, 1, page)
    pages = get_numPages(page)
    for i in range(pages):
        t = threading.Thread(target=thread, args=(url, True, i + 2))
        threads.append(t)
    [t.start() for t in threads]
    [t.join() for t in threads]


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
            get_list(url)
        else:
            thread("", False, 1, get_page(url))

        return res


api.add_resource(WebScraping, '/api/v2/scraping')
if __name__ == '__main__':
    app.run(debug=True)
