package co.trakien.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import co.trakien.dto.ProductDto;
import co.trakien.services.ProductServices;

@RestController
@RequestMapping("/api/v2/filters")

public class FilterController {
    @Autowired
    private ProductServices productServices;

    @GetMapping
    public ResponseEntity<String> getAll() {
        return ResponseEntity.ok("[\"Category\",\"Brand\",\"Price\"]");
    }

    @GetMapping("/categories")
    public ResponseEntity<List<String>> getAllCategories() {
        return ResponseEntity
                .ok(productServices.getAllCategories());
    }

    @GetMapping("/categories/{category}")
    public ResponseEntity<List<ProductDto>> getByCategories(@PathVariable String category) {
        ArrayList<ProductDto> products = new ArrayList<>();
        productServices.getByCategory(category).forEach((product) -> products.add(product.toProductDto()));
        return ResponseEntity.ok(products);
    }

    @GetMapping("/brands")
    public ResponseEntity<List<String>> getAllBrands() {
        return ResponseEntity
                .ok(productServices.getAllBrands());
    }

    @GetMapping("/brands/{brand}")
    public ResponseEntity<List<ProductDto>> getByBrand(@PathVariable String brand) {
        ArrayList<ProductDto> products = new ArrayList<>();
        productServices.getByBrand(brand).forEach((product) -> products.add(product.toProductDto()));
        return ResponseEntity.ok(products);
    }

    @GetMapping("/names/{name}")
    public ResponseEntity<List<ProductDto>> getLikeName(@PathVariable String name) {
        ArrayList<ProductDto> products = new ArrayList<>();
        productServices.getLikeName(name).forEach((product) -> products.add(product.toProductDto()));
        return ResponseEntity.ok(products);
    }
}
