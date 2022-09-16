package co.trakien.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import co.trakien.dto.ProductDto;
import co.trakien.entities.Product;
import co.trakien.services.ProductServices;

@RestController
@RequestMapping("/api/v2/productapi")
public class ProductController {

    @Autowired
    private ProductServices productServices;

    @GetMapping
    public ResponseEntity<List<ProductDto>> getAll() {
        ArrayList<ProductDto> products = new ArrayList<>();
        productServices.getAll().forEach((product) -> products.add(product.toProductDto()));
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> findById(@PathVariable String id) {
        Product product = productServices.findById(id);
        return ResponseEntity
                .ok((product != null) ? product.toProductDto() : null);
    }

    @GetMapping("/ref/{ref}")
    public ResponseEntity<ProductDto> findByRef(@PathVariable String ref) {
        Product product = productServices.findByRef(ref);
        return ResponseEntity
                .ok((product != null) ? product.toProductDto() : null);
    }

    @DeleteMapping
    public ResponseEntity<Boolean> deleteAll() {
        return ResponseEntity.ok(productServices.deleteAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteById(@PathVariable String id) {
        return ResponseEntity.ok(productServices.deleteById(id));
    }

}
