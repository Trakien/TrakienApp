import threading
from webbrowser import get
import requests
import json
from flask import Flask
from flask_restful import Resource, Api, reqparse


app = Flask(__name__)
api = Api(app)

url = 'https://qx5ips1b1q-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.5.1)%3B%20Browser%20(lite)%3B%20instantsearch.js%20(4.40.3)%3B%20JS%20Helper%20(3.8.0)&x-algolia-api-key=04636813b7beb6abd08a7e35f8c880a1&x-algolia-application-id=QX5IPS1B1Q'


def thread(name, page):
    params = {"requests": [{"indexName": f"{name}IndexAlgoliaPRD", "params": "analytics=true&clickAnalytics=true&hitsPerPage=25&maxValuesPerFacet=20&removeWordsIfNoResults=allOptional&query=&page=" +
                            str(page)+"&facets=%5B%22*%22%5D&tagFilters=&facetFilters=%5B%5B%22hierarchicalcategory_string_mv.lvl1%3ACelulares%20%3E%20Tel%C3%A9fonos%20Celulares%22%5D%5D"}]}
    response = requests.post(url, json=params).json()["results"][0]
    cleaner(response)


def cleaner(response):
    temp = []
    for item in response["hits"]:
        dicRes = {"name": item["name_text_es"], "id": item["code_string"],
                  "price": str(item["pricevalue_cop_double"]), "brand": item["brand_string_mv"][0]}
        temp.append(dicRes)
    res.extend(temp)
    print(len(res))


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


class WebScraping(Resource):

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


api.add_resource(WebScraping, '/api/v2/scraping')
if __name__ == '__main__':
    app.run(debug=True)
