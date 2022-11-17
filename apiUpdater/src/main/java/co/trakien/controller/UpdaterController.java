package co.trakien.controller;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import co.trakien.entities.Product;
import co.trakien.services.ProductServices;

@RestController
@RequestMapping("/api/v2/updater")
public class UpdaterController {

    @Autowired
    private ProductServices productServices;
    private int statusCode;

    @GetMapping
    public ResponseEntity<List<Product>> getAll(@RequestHeader HttpHeaders token) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        System.out.println(statusCode);
        if (statusCode == 200) {
            return ResponseEntity.ok(productServices.getAll());
        } else
            return ResponseEntity.status(statusCode).build();
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Product> getById(@RequestHeader HttpHeaders token, @PathVariable String id) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            return ResponseEntity.ok(productServices.findById(id));
        } else
            return ResponseEntity.status(statusCode).build();

    }

    @GetMapping("/ref/{ref}")
    public ResponseEntity<Product> getByRef(@RequestHeader HttpHeaders token, @PathVariable String ref) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            return ResponseEntity.ok(productServices.findById(ref));
        } else
            return ResponseEntity.status(statusCode).build();
    }

    @PostMapping
    public ResponseEntity<List<Product>> save(@RequestHeader HttpHeaders token,
            @RequestParam(value = "store") String store,
            @RequestParam(value = "url") String url,
            @RequestParam(value = "category") String category) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            System.out.println("store: " + store + " url: " + url + " category: " + category);
            return ResponseEntity.ok(productServices.save(store, url, category));
        } else
            return ResponseEntity.status(statusCode).build();
    }

    @DeleteMapping
    public ResponseEntity<Boolean> deleteAll(@RequestHeader HttpHeaders token) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            return ResponseEntity.ok(productServices.deleteAll());
        } else
            return ResponseEntity.status(statusCode).build();
    }

    @PutMapping
    public ResponseEntity<Boolean> updateAll(@RequestHeader HttpHeaders token,
            @RequestParam(value = "store") String store,
            @RequestParam(value = "url") String url,
            @RequestParam(value = "category") String category,
            @RequestParam(value = "depuracion") boolean depuracion) {
        statusCode = validToken(token.getFirst(HttpHeaders.AUTHORIZATION));
        if (statusCode == 200) {
            try {
                return ResponseEntity.ok(productServices.updateAll());
            } catch (InterruptedException e) {
                return ResponseEntity.ok(false);
            }
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
