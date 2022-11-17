package co.trakien.apis.kkk;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

import co.trakien.apis.ApiController;
import co.trakien.entities.Product;
import co.trakien.entities.Store;

public class KKKScraper extends ApiController {

    private static final String GET_URL = "http://webscraper:5000/api/v2/scraping";

    private String name;
    private String url;
    private String category;

    public KKKScraper() {
        super();
    }

    public KKKScraper(String name, String url, String category) {
        super();
        this.name = name;
        this.url = url;
        this.category = category;
    }

    @Override
    public List<Product> getProducts(int product) {
        List<Product> products = new ArrayList<>();
        try {
            String response = getData(product).body();
            JSONArray array = new JSONArray(response);
            for (int i = 0; i < array.length(); i++) {
                JSONObject object = array.getJSONObject(i);
                products.add(inicializador(object, i));
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
        return products;
    }

    public HttpResponse<String> getData(int product) throws IOException, InterruptedException {
        String json = new StringBuilder()
                .append("{")
                .append("\"url\":\"" + url + "\",")
                .append("\"product\":\"" + product + "\"")
                .append("}").toString();
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .uri(URI.create(GET_URL))
                .header("Content-Type", "application/json")
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response;
    }

    private Product inicializador(JSONObject object, int i) {
        Product product = new Product();
        product.setRef(object.getString("id"));
        product.setName(object.getString("name"));
        product.setCategory(category);
        product.setBrand(object.getString("brand"));
        List<Date> updateDates = new ArrayList<>();
        updateDates.add(new Date());
        List<String> prices = new ArrayList<>();
        prices.add(object.getString("price"));
        List<Store> stores = new ArrayList<>();
        Store store = new Store(name, url.substring(0,
                url.indexOf(".com") + 4)
                + "/p/"
                + object.getString("id"),
                prices, updateDates);
        stores.add(store);
        product.setStores(stores);
        return product;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
