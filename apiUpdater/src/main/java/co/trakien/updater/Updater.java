package co.trakien.updater;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.Callable;

import org.springframework.beans.factory.annotation.Autowired;

import co.trakien.apis.ApiController;
import co.trakien.entities.Product;
import co.trakien.entities.Store;
import co.trakien.repository.ProductRepository;

public class Updater implements Callable<List<Product>> {

    private List<Product> products;
    @Autowired
    private ProductRepository productRepository;

    public Updater(List<Product> products) {
        this.products = products;
    }

    @Override
    public List<Product> call() throws Exception {
        List<Product> updatedProducts = new ArrayList<>();
        for (Product product : products) {
            updatedProducts.add(updateProduct(product));
        }
        return updatedProducts;
    }

    private Product updateProduct(Product product) {
        for (Store store : product.getStores()) {
            String updatedPrice = ApiController.identifyStore(store.getName(), store.getUrl(), product.getCategory())
                    .getProducts(1).get(0).getStores().get(0).getPrices().get(0);

            store.addPrice(updatedPrice);
            store.addUpdateDate(new Date());
        }
        return productRepository.save(product);
    }

}
