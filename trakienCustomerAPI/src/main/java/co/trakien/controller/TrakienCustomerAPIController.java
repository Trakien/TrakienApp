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
public class TrakienCustomerAPIController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public ResponseEntity<List<CustomerDto>> getAll() {
        ArrayList<CustomerDto> customers = new ArrayList<>();
        customerService.getAll().forEach((customer) -> customers.add(customer.toCustomerDTO()));
        return ResponseEntity.ok(customers);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerDto> findById(@PathVariable String id) {
        Customer customer = customerService.findById(id);
        return ResponseEntity
                .ok((customer != null) ? customer.toCustomerDTO() : null);
    }

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

    @RolesAllowed("ADMIN")
    @PostMapping
    public ResponseEntity<CustomerDto> createAdmin(@RequestBody CustomerDto customer) {
        if (customer != null) {
            Customer account = customer.toCustomer();
            account.addRol(RoleEnum.ADMIN);
            return ResponseEntity
                    .ok(customerService.create(account).toCustomerDTO());
        } else
            return ResponseEntity.badRequest().body(null);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomerDto> update(@RequestBody CustomerDto customer, @PathVariable String id) {
        if (customer != null)
            return ResponseEntity.ok(customerService.update(customer.toCustomer(), id).toCustomerDTO());
        else
            return ResponseEntity.badRequest().body(null);
    }

    @RolesAllowed("ADMIN")
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable String id) {
        return ResponseEntity.ok(customerService.deleteById(id));
    }

}
