package co.trakien.service;

import java.util.List;
import java.util.Optional;

import co.trakien.entity.Customer;

public interface CustomerService {
    Customer create(Customer customer);

    Customer findById(String id);

    List<Customer> getAll();

    boolean deleteById(String id);

    Customer update(Customer customer, String customerId);

    Optional<Customer> findByEmail(String email);
}
