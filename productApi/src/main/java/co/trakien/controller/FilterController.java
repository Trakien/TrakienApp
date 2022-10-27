package co.trakien.controller;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import co.trakien.dto.FiltersDto;
import co.trakien.dto.ProductDto;
import co.trakien.services.ProductServices;

@RestController
@RequestMapping("/api/v2/filters")
@CrossOrigin("*")
public class FilterController {
    @Autowired
    private ProductServices productServices;
    private int statusCode;

    @GetMapping
    public ResponseEntity<String> getAll(@RequestHeader HttpHeaders token) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            return ResponseEntity.ok("[\"Category\",\"Brand\",\"Price\"]");
        } else
            return ResponseEntity.status(statusCode).build();
    }

    @PostMapping("/categories")
    public ResponseEntity<List<String>> getAllCategories(
            @RequestHeader HttpHeaders token) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            return ResponseEntity
                    .ok(productServices.getAllCategories());
        } else
            return ResponseEntity.status(statusCode).build();
    }

    @PostMapping("/categories/filter")
    public ResponseEntity<List<String>> getFilterCategories(@RequestBody FiltersDto filters,
            @RequestHeader HttpHeaders token) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            return ResponseEntity
                    .ok(productServices.getAllCategories(filters.getBrands(), filters.getSearch()));
        } else
            return ResponseEntity.status(statusCode).build();
    }

    @GetMapping("/categories/{category}")
    public ResponseEntity<List<ProductDto>> getByCategories(@PathVariable String category,
            @RequestHeader HttpHeaders token) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            ArrayList<ProductDto> products = new ArrayList<>();
            productServices.getByCategory(category).forEach((product) -> products.add(product.toProductDto()));
            return ResponseEntity.ok(products);
        } else
            return ResponseEntity.status(statusCode).build();
    }

    @PostMapping("/brands")
    public ResponseEntity<List<String>> getAllBrands(
            @RequestHeader HttpHeaders token) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            return ResponseEntity
                    .ok(productServices.getAllBrands());
        } else
            return ResponseEntity.status(statusCode).build();
    }

    @PostMapping("/brands/filter")
    public ResponseEntity<List<String>> getFilterBrands(@RequestBody FiltersDto filters,
            @RequestHeader HttpHeaders token) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            return ResponseEntity
                    .ok(productServices.getAllBrands(filters.getCategories(), filters.getSearch()));
        } else
            return ResponseEntity.status(statusCode).build();
    }

    @GetMapping("/brands/{brand}")
    public ResponseEntity<List<ProductDto>> getByBrand(@PathVariable String brand, @RequestHeader HttpHeaders token) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            ArrayList<ProductDto> products = new ArrayList<>();
            productServices.getByBrand(brand).forEach((product) -> products.add(product.toProductDto()));
            return ResponseEntity.ok(products);
        } else
            return ResponseEntity.status(statusCode).build();
    }

    @GetMapping("/names/{name}")
    public ResponseEntity<List<ProductDto>> getLikeName(@PathVariable String name, @RequestHeader HttpHeaders token) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            ArrayList<ProductDto> products = new ArrayList<>();
            productServices.getLikeName(name).forEach((product) -> products.add(product.toProductDto()));
            return ResponseEntity.ok(products);
        } else
            return ResponseEntity.status(statusCode).build();
    }

    @PostMapping("/allFilter")
    public ResponseEntity<List<ProductDto>> getAllFilter(@RequestBody FiltersDto filters,
            @RequestHeader HttpHeaders token) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            ArrayList<ProductDto> products = new ArrayList<>();
            productServices.getAllFilter(filters.getSearch(), filters.getBrands(), filters.getCategories())
                    .forEach((product) -> products.add(product.toProductDto()));
            return ResponseEntity.ok(products);
        } else
            return ResponseEntity.status(statusCode).build();
    }

    private int validToken(String token) {
        int code;
        if (token != null) {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("http://trakiencustomerapi:8080/v2/auth"))
                    .header("Authorization",
                            token)
                    .method("GET", HttpRequest.BodyPublishers.noBody())
                    .build();
            HttpResponse<String> response;
            try {
                response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
                code = response.statusCode();
            } catch (IOException | InterruptedException e) {
                e.printStackTrace();
                code = 500;
            }
        } else
            code = 403;
        return code;
    }

}
