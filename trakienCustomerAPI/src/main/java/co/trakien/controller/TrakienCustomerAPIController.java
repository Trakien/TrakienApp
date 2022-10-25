package co.trakien.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import co.trakien.dto.CustomerDto;
import co.trakien.entity.Customer;
import co.trakien.service.CustomerService;
import co.trakien.util.RoleEnum;

@RestController
@RequestMapping("/api/v2/customers")
@CrossOrigin("*")
public class TrakienCustomerAPIController {

    @Autowired
    private CustomerService customerService;

    /**
     * This method brings all customers
     * 
     * @param customerDto
     * @return ResponseEntity<List<Customer>>
     */
    @GetMapping
    public ResponseEntity<List<CustomerDto>> getAll() {
        ArrayList<CustomerDto> customers = new ArrayList<>();
        customerService.getAll().forEach((customer) -> customers.add(customer.toCustomerDTO()));
        return ResponseEntity.ok(customers);
    }

    /**
     * This method brings a customer by id
     * 
     * @param id
     * @return ResponseEntity<Customer>
     */
    @GetMapping("/{id}")
    public ResponseEntity<CustomerDto> findById(@PathVariable String id) {
        Customer customer = customerService.findById(id);
        return ResponseEntity
                .ok((customer != null) ? customer.toCustomerDTO() : null);
    }

    /**
     * This method Creates a customer
     * 
     * @param customer
     * @return ResponseEntity<Customer>
     */
    @PostMapping
    public ResponseEntity<CustomerDto> create(@RequestBody CustomerDto customer) {
        if (customer != null) {
            Customer account = customer.toCustomer();
            account.addRol(RoleEnum.CUSTOMER);
            return ResponseEntity
                    .ok(customerService.create(account).toCustomerDTO());
        } else
            return ResponseEntity.badRequest().body(null);
    }

    /**
     * This method Creates a customer with admin role
     * 
     * @param customer
     * @return ResponseEntity<CustomerDto>
     */
    @PostMapping("/admin")
    @RolesAllowed("ADMIN")
    public ResponseEntity<CustomerDto> createAdmin(@RequestBody CustomerDto customer) {
        if (customer != null) {
            Customer account = customer.toCustomer();
            account.addRol(RoleEnum.ADMIN);
            return ResponseEntity
                    .ok(customerService.create(account).toCustomerDTO());
        } else
            return ResponseEntity.badRequest().body(null);
    }

    /**
     * This method Updates a customer
     * 
     * @param customer
     * @return ResponseEntity<Customer>
     */
    @PutMapping("/{id}")
    public ResponseEntity<CustomerDto> update(@RequestBody CustomerDto customer, @PathVariable String id) {
        if (customer != null)
            return ResponseEntity.ok(customerService.update(customer.toCustomer(), id).toCustomerDTO());
        else
            return ResponseEntity.badRequest().body(null);
    }

    /**
     * This method Deletes a customer
     * 
     * @param id
     * @return ResponseEntity<Customer>
     */
    @DeleteMapping("/{id}")
    @RolesAllowed("ADMIN")
    public ResponseEntity<Boolean> delete(@PathVariable String id) {
        return ResponseEntity.ok(customerService.deleteById(id));
    }

}
