package co.trakien.service.implementation;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import co.trakien.entity.Customer;
import co.trakien.service.CustomerService;

public class CustomerServiceHashMap implements CustomerService {

    private final HashMap<String, Customer> persistence = new HashMap<>();

    /**
     * Create a new customer
     */
    @Override
    public Customer create(Customer customer) {
        if (persistence.get(customer.getId()) == null)
            persistence.put(customer.getId(), customer);
        return persistence.get(customer.getId());
    }

    /**
     * Get a customer by id
     */
    @Override
    public Customer findById(String id) {
        return persistence.get(id);
    }

    /**
     * Get all customers
     */
    @Override
    public List<Customer> getAll() {
        return new ArrayList<Customer>(persistence.values());
    }

    /**
     * Delete a customer by
     */
    @Override
    public boolean deleteById(String id) {
        boolean flag = persistence.get(id) != null;
        if (flag)
            persistence.remove(id);
        flag = persistence.get(id) == null;
        return flag;
    }

    /**
     * Update a customer
     */
    @Override
    public Customer update(Customer customer, String customerId) {
        if (customer.getId() != customerId)
            persistence.remove(customerId);
        persistence.put(customer.getId(), customer);
        return persistence.get(customer.getId());
    }

    /**
     * Get a customer by email
     */
    @Override
    public Optional<Customer> findByEmail(String email) {
        // TODO Auto-generated method stub
        return Optional.empty();
    }

    @Override
    public void deleteAll() {
        // TODO Auto-generated method stub

    }

}
