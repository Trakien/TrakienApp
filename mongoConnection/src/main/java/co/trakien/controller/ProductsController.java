package co.trakien.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v2/products")
public class ProductsController {

    @GetMapping
    public ResponseEntity<List<String>> getAll() {
        ArrayList<String> products = new ArrayList<>();
        products.add("Hello");
        products.add("World");
        return ResponseEntity.ok(products);
    }

}
