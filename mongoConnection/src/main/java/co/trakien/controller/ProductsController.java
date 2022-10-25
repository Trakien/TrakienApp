package co.trakien.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v2/products")
public class ProductsController {

    @GetMapping
    public ResponseEntity<List<String>> getAll(@RequestHeader HttpHeaders token) {
        ArrayList<String> products = new ArrayList<>();
        products.add("Hello");
        products.add(token.getFirst(HttpHeaders.AUTHORIZATION));
        return ResponseEntity.ok(products);
    }

}
