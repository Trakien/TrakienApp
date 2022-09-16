package co.trakien.apis;

import java.util.List;

import co.trakien.apis.kkk.KKKScraper;
import co.trakien.entities.Product;

public abstract class ApiController {

    public static ApiController identifyStore(String store, String url, String category) {
        ApiController storeApi = null;
        if (store.equals("Alkosto") || store.equals("Ktronix") || store.equals("Alkomprar")) {
            storeApi = new KKKScraper(store, url, category);
        }
        return storeApi;
    }

    public abstract List<Product> getProducts(int product);

}
