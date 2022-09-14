package co.trakien.service.implementation;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import co.trakien.entity.Customer;
import co.trakien.service.CustomerService;

public class CustomerServiceHashMap implements CustomerService {

    private final HashMap<String, Customer> persistence = new HashMap<>();

    @Override
    public Customer create(Customer customer) {
        if (persistence.get(customer.getId()) == null)
            persistence.put(customer.getId(), customer);
        return persistence.get(customer.getId());
    }

    @Override
    public Customer findById(String id) {
        return persistence.get(id);
    }

    @Override
    public List<Customer> getAll() {
        return new ArrayList<Customer>(persistence.values());
    }

    @Override
    public boolean deleteById(String id) {
        boolean flag = persistence.get(id) != null;
        if (flag)
            persistence.remove(id);
        flag = persistence.get(id) == null;
        return flag;
    }

    @Override
    public Customer update(Customer customer, String customerId) {
        if (customer.getId() != customerId)
            persistence.remove(customerId);
        persistence.put(customer.getId(), customer);
        return persistence.get(customer.getId());
    }

    @Override
    public Optional<Customer> findByEmail(String email) {
        // TODO Auto-generated method stub
        return Optional.empty();
    }

}
