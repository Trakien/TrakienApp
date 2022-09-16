package co.trakien.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.trakien.apis.ApiController;
import co.trakien.entities.Product;
import co.trakien.entities.Store;
import co.trakien.repository.ProductRepository;
import co.trakien.services.ProductServices;

@Service
public class ProductServicesMongo implements ProductServices {

    private final ProductRepository productRepository;

    public ProductServicesMongo(@Autowired ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product save(Product product) {
        Product savedProduct = productRepository.findByRef(product.getRef()).orElse(null);
        if (savedProduct != null) {
            product.setId(savedProduct.getId());
            Store store = product.getStores().get(0);
            if (!savedProduct.existsStore(store.getName())) {
                store.initPrices(savedProduct.getUpdateDates().size());
                product.addStores(updateProduct(savedProduct).getStores());
            }
        }
        return productRepository.save(product);
    }

    public Product updateProduct(Product product) {
        List<Store> newStores = new ArrayList<>();
        for (Store store : product.getStores()) {
            String updatedPrice = ApiController.identifyStore(store.getName(), store.getUrl(), product.getCategory())
                    .getProducts(1).get(0).getStores().get(0).getPrices().get(0);
            store.addPrice(updatedPrice);
            newStores.add(store);
        }
        // product.setStores(newStores);
        return product;
    }

    @Override
    public List<Product> saveAll(List<Product> products) {
        List<Product> resultList = new ArrayList<>();
        for (Product product : products) {
            resultList.add(save(product));
        }
        return resultList;
    }

    @Override
    public Product findById(String id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findByRef(String ref) {
        return productRepository.findByRef(ref).orElse(null);
    }

    @Override
    public List<Product> save(String store, String url, String category, boolean depuracion) {
        return saveAll(ApiController.identifyStore(store, url, category).getProducts(0));
    }

    @Override
    public boolean deleteAll() {
        productRepository.deleteAll();
        return getAll().isEmpty();
    }

    @Override
    public boolean deleteById(String id) {
        boolean flag = productRepository.findById(id).isPresent();
        if (flag) {
            productRepository.deleteById(id);
        }
        flag = productRepository.findById(id).isEmpty();
        return flag;
    }

}
