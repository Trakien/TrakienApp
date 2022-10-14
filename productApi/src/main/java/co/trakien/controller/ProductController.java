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

import co.trakien.dto.ProductDto;
import co.trakien.entities.Product;
import co.trakien.services.ProductServices;

@RestController
@RequestMapping("/api/v2/products")
public class ProductController {

    @Autowired
    private ProductServices productServices;
    private int statusCode;

    @GetMapping
    public ResponseEntity<List<ProductDto>> getAll(@RequestHeader HttpHeaders token) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            ArrayList<ProductDto> products = new ArrayList<>();
            productServices.getAll().forEach((product) -> products.add(product.toProductDto()));
            return ResponseEntity.ok(products);
        } else
            return ResponseEntity.status(statusCode).build();
    }

    @GetMapping("/ref/{ref}")
    public ResponseEntity<ProductDto> findByRef(@PathVariable String ref, @RequestHeader HttpHeaders token) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            Product product = productServices.findByRef(ref);
            return ResponseEntity
                    .ok((product != null) ? product.toProductDto() : null);
        } else
            return ResponseEntity.status(statusCode).build();
    }

    private int validToken(String token) {
        int code;
        if (token != null) {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("http://trakiencustomerapi:8080/v2/auth/admin"))
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
