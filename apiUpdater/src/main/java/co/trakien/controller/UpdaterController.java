package co.trakien.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import co.trakien.apiScraper.ConnectionScraper;

@RestController
@RequestMapping("/api/v2/updater")
public class UpdaterController {

    @GetMapping
    public ResponseEntity<String> getAll() {
        String res = "";
        try {
            res = ConnectionScraper.getApi().body();
        } catch (Exception e) {
            System.out.println(e);
            e.printStackTrace();
        }
        return ResponseEntity.ok(res);
    }

}
