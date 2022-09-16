package co.trakien.services;

import java.util.List;

import co.trakien.entities.Product;

public interface ProductServices {

    List<Product> save(String store, String url, String category, boolean depuracion);

    Product save(Product product);

    List<Product> saveAll(List<Product> products);

    Product findById(String id);

    Product findByRef(String ref);

    List<Product> getAll();

    boolean deleteAll();

    boolean deleteById(String id);

}
