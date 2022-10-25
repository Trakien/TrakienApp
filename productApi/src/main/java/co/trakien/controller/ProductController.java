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
@RequestMapping("/api/v2/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductServices productServices;

    @GetMapping
    public ResponseEntity<List<ProductDto>> getAll() {
        ArrayList<ProductDto> products = new ArrayList<>();
        productServices.getAll().forEach((product) -> products.add(product.toProductDto()));
        return ResponseEntity.ok(products);
    }

    @GetMapping("/ref/{ref}")
    public ResponseEntity<ProductDto> findByRef(@PathVariable String ref) {
        Product product = productServices.findByRef(ref);
        return ResponseEntity
                .ok((product != null) ? product.toProductDto() : null);
    }
}
