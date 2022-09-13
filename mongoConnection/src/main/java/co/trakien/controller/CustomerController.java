package co.trakien.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v2/products")
public class CustomerController {

    @GetMapping
    public ResponseEntity<List<String>> getAll() {
        ArrayList<String> customers = new ArrayList<>();
        customers.add("Hello");
        customers.add("World");
        return ResponseEntity.ok(customers);
    }

}
