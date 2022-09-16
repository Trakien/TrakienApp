package co.trakien.services.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import co.trakien.apis.ApiController;
import co.trakien.entities.Product;
import co.trakien.services.ProductServices;

public class ProductServiceHashMap implements ProductServices {

    private final HashMap<String, Product> persistence = new HashMap<>();

    @Override
    public List<Product> save(String store, String url, String category, boolean depuracion) {
        return saveAll(ApiController.identifyStore(store, url, category).getProducts(0));
    }

    @Override
    public Product save(Product product) {
        if (persistence.get(product.getId()) == null) {
            persistence.put(product.getId(), product);
        }
        return persistence.get(product.getId());
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
        return persistence.get(id);
    }

    @Override
    public Product findByRef(String ref) {
        return persistence.get(ref);
    }

    @Override
    public List<Product> getAll() {
        return new ArrayList<Product>(persistence.values());
    }

    @Override
    public boolean deleteAll() {
        List<Product> allProducts = getAll();
        boolean flag = !allProducts.isEmpty();
        if (flag) {
            allProducts.clear();
        }
        flag = allProducts.isEmpty();
        return flag;
    }

    @Override
    public boolean deleteById(String id) {
        boolean flag = persistence.get(id) != null;
        if (flag)
            persistence.remove(id);
        flag = persistence.get(id) == null;
        return flag;
    }

}
