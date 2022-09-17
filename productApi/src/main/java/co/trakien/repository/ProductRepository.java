package co.trakien.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import co.trakien.entities.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
    @Query("{'ref': ?0 }")
    Optional<Product> findByRef(String ref);

    @Query("{'brand': ?0 }")
    List<Product> getByBrand(String ref);

    @Query("{'category': ?0 }")
    List<Product> getByCategory(String ref);

    @Query("{'brand': {$regex: ?0, $options:'i'}}")
    List<Product> getLikeName(String ref);

    @Aggregation(pipeline = { "{ '$group': { '_id' : '$brand' } }" })
    List<String> getAllBrands();

    @Aggregation(pipeline = { "{ '$group': { '_id' : '$category' } }" })
    List<String> getAllCategories();
}
