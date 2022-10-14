package co.trakien.services.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.trakien.entities.Product;
import co.trakien.repository.ProductRepository;
import co.trakien.services.ProductServices;

@Service
public class ProductServicesMongo implements ProductServices {

    private final ProductRepository productRepository;

    public ProductServicesMongo(@Autowired ProductRepository productRepository) {
        this.productRepository = productRepository;
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

    @Override
    public List<Product> getByBrand(String ref) {
        return productRepository.getByBrand(ref);
    }

    @Override
    public List<Product> getByCategory(String ref) {
        return productRepository.getByCategory(ref);
    }

    @Override
    public List<Product> getLikeName(String ref) {
        return productRepository.getLikeName(ref);
    }

    @Override
    public List<String> getAllBrands() {
        return productRepository.getAllBrands();
    }

    @Override
    public List<String> getAllCategories() {
        return productRepository.getAllCategories();
    }

}
