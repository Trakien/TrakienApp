package co.trakien.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import co.trakien.entities.Product;
import co.trakien.services.ProductServices;

@RestController
@RequestMapping("/api/v2/updater")
public class UpdaterController {

    @Autowired
    private ProductServices productServices;

    @GetMapping
    public ResponseEntity<List<Product>> getAll() {
        return ResponseEntity.ok(productServices.getAll());
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Product> getById(@PathVariable String id) {
        return ResponseEntity.ok(productServices.findById(id));
    }

    @GetMapping("/ref/{ref}")
    public ResponseEntity<Product> getByRef(@PathVariable String ref) {
        return ResponseEntity.ok(productServices.findById(ref));
    }

    @PostMapping
    public ResponseEntity<List<Product>> save(@RequestParam(value = "store") String store,
            @RequestParam(value = "url") String url,
            @RequestParam(value = "category") String category,
            @RequestParam(value = "depuracion") boolean depuracion) {
        return ResponseEntity.ok(productServices.save(store, url, category, depuracion));
    }

    @DeleteMapping
    public ResponseEntity<Boolean> deleteAll() {
        return ResponseEntity.ok(productServices.deleteAll());
    }

}
