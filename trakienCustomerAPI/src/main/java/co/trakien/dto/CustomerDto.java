package co.trakien.dto;

import java.text.SimpleDateFormat;
import co.trakien.entity.Customer;

public class CustomerDto {

    private String id;
    private String name;
    private String passwd;
    private String email;
    private String lastName;
    private String createdAt;

    public CustomerDto() {
    }

    public CustomerDto(String id, String name, String email, String lastName, String createdAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.lastName = lastName;
        this.createdAt = createdAt;
    }

    public CustomerDto(String id, String name, String passwd, String email, String lastName, String createdAt) {
        this.id = id;
        this.name = name;
        this.passwd = passwd;
        this.email = email;
        this.lastName = lastName;
        this.createdAt = createdAt;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public Customer toCustomer() {
        try {
            return new Customer(id, name, passwd, email, lastName, new SimpleDateFormat("dd/MM/yyyy").parse(createdAt));
        } catch (Exception e) {
            return null;
        }

    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String paswd) {
        this.passwd = paswd;
    }

}
