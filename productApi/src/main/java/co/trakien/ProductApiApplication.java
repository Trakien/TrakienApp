package co.trakien;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = { "co.trakien" })
@SpringBootApplication
public class ProductApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(ProductApiApplication.class, args);
    }
}
