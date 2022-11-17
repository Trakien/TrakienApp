package co.trakien.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.AutowireCapableBeanFactory;
import org.springframework.stereotype.Service;

import co.trakien.apis.ApiController;
import co.trakien.entities.Product;
import co.trakien.entities.Store;
import co.trakien.repository.ProductRepository;
import co.trakien.services.ProductServices;
import co.trakien.updater.Updater;

@Service
public class ProductServicesMongo implements ProductServices {

    private int THREADS;
    @Autowired
    private AutowireCapableBeanFactory beanFactory;

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
            Store savedStore = savedProduct.getStore(store.getName());
            if (savedStore == null) {
                product.addStores(savedProduct.getStores());
            } else {
                store.addPrices(savedStore.getPrices());
                store.addUpdateDates(savedStore.getUpdateDates());
            }
        }
        return productRepository.save(product);
    }

    @Override
    public boolean updateAll() throws InterruptedException {
        List<Product> products = getAll();
        THREADS = products.size();
        ExecutorService pool = Executors.newFixedThreadPool(THREADS);
        List<Updater> updaters = new ArrayList<>();
        int slicer = (int) (Math.floorDiv(products.size() * -1, THREADS)) * -1;
        for (int i = 0; i < THREADS; i++) {
            List<Product> slicerProducts = products.subList(slicer * i,
                    slicer * (i + 1) > products.size() ? products.size() : slicer * (i + 1));
            Updater updater = new Updater(slicerProducts);
            beanFactory.autowireBean(updater);
            updaters.add(updater);
        }
        pool.invokeAll(updaters);
        pool.shutdown();
        return true;
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
    public List<Product> save(String store, String url, String category) {
        return saveAll(ApiController.identifyStore(store, url, category).getProducts(0));
    }

    @Override
    public boolean deleteAll() {
        productRepository.deleteAll();
        return getAll().isEmpty();
    }

}
