package co.trakien.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import co.trakien.entity.Customer;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {

    @Query("{$or: [{'name': {$regex: ?0, $options:'i'}}, {'lastName': {$regex: ?0, $options:'i'}}]}")
    List<Customer> findUsersWithNameOrLastNameLike(String name);

    @Query("{'createdAt' : { $gte: ?0} }")
    public List<Customer> findUsersCreatedAfter(Date from);

    @Query("{'email' : ?0}")
    Optional<Customer> findByEmail(String email);
}
