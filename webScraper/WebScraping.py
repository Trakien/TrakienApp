import requests
from lxml import html
import sys
from flask import Flask
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)


def clean_list(listToClean):
    listResult = list()
    for i in listToClean:
        id = i.attrib['href']
        if id not in listResult:
            listResult.append(id)
    return listResult


def get_data(prices, ids, mainUrl):
    dic_data = dict()
    for i in range(len(prices)):
        dic_data[mainUrl + ids[i]] = prices[i].text_content().strip().split()[0]
    return dic_data


class WebScraping(Resource):

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('url', required=True)
        args = parser.parse_args()
        url = args['url']
        page = requests.get(url).content
        mainUrl = url[:url.find('.com')+4]
        htmls = html.fromstring(page)
        prices_raw = htmls.find_class('price')
        ids_raw = clean_list(htmls.find_class('js-product-click-datalayer'))
        return get_data(prices_raw, ids_raw, mainUrl), 200


api.add_resource(WebScraping, '/api/v2/scraping')
if __name__ == '__main__':
    app.run(debug=True)
