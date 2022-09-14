package co.trakien.service.implementation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.trakien.entity.Customer;
import co.trakien.repository.CustomerRepository;
import co.trakien.service.CustomerService;
import co.trakien.util.RoleEnum;

@Service
public class CustomerServiceMongoDB implements CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerServiceMongoDB(@Autowired CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public Customer create(Customer customer) {
        customer.addRol(RoleEnum.ADMIN);
        return customerRepository.insert(customer);
    }

    @Override
    public Customer findById(String id) {
        return customerRepository.findById(id).get();
    }

    @Override
    public List<Customer> getAll() {
        return customerRepository.findAll();
    }

    @Override
    public boolean deleteById(String id) {
        boolean flag = customerRepository.findById(id).isPresent();
        if (flag)
            customerRepository.deleteById(id);
        flag = customerRepository.findById(id).isEmpty();
        return flag;

    }

    @Override
    public Customer update(Customer customer, String customerId) {
        return customerRepository.save(customer);
    }

    @Override
    public Optional<Customer> findByEmail(String email) {
        return customerRepository.findByEmail(email);
    }

}
