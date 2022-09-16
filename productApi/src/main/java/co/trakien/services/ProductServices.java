package co.trakien.services;

import java.util.List;

import co.trakien.entities.Product;

public interface ProductServices {

    Product findById(String id);

    Product findByRef(String ref);

    List<Product> getAll();

    boolean deleteAll();

    boolean deleteById(String id);

}
