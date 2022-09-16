package co.trakien.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import co.trakien.entities.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
    @Query("{'ref': ?0 }")
    Optional<Product> findByRef(String ref);
}
