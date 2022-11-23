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

        @Query("{'name': {$regex: ?0, $options:'i'}, 'brand': {$in: ?1}, 'category': {$in: ?2}}")
        List<Product> getAllFilter(String search, List<String> brands, List<String> category);

        @Aggregation(pipeline = {
                        "{'$group': { '_id' : '$brand' } }" })
        List<String> getAllBrands();

        @Aggregation(pipeline = {
                        "{'$group': { '_id' : '$category' } }" })
        List<String> getAllCategories();

        @Aggregation(pipeline = {
                        "{'$match': { category : { '$in' : ?0 } , name: {$regex: ?1, $options:'i'} } }",
                        "{'$group': { '_id' : '$brand' } }"
        })
        List<String> getAllBrands(List<String> categories, String search);

        @Aggregation(pipeline = {
                        "{'$match': { brand : { '$in' : ?0 } , name: {$regex: ?1, $options:'i'} } }",
                        "{'$group': { '_id' : '$category' } }" })
        List<String> getAllCategories(List<String> brands, String search);
}
