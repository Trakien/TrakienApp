package co.trakien.services;

import java.util.List;

import co.trakien.entities.Product;

public interface ProductServices {

    Product findById(String id);

    Product findByRef(String ref);

    List<Product> getAll();

    boolean deleteAll();

    boolean deleteById(String id);

    List<Product> getByBrand(String ref);

    List<Product> getByCategory(String ref);

    List<Product> getLikeName(String ref);

    List<String> getAllBrands();

    List<String> getAllCategories();

    List<String> getAllBrands(List<String> category, String search);

    List<String> getAllCategories(List<String> brands, String search);

    List<Product> getAllFilter(String search, List<String> brands, List<String> category);

}
