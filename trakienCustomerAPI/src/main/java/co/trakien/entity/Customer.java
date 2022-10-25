package co.trakien.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.crypto.bcrypt.BCrypt;

import co.trakien.dto.CustomerDto;
import co.trakien.util.RoleEnum;

@Document
public class Customer {

    @Id
    private String id;
    private String name;
    @Indexed(unique = true)
    private String passwordHash;
    private List<RoleEnum> roles = new ArrayList<>();
    private String email;
    private String lastName;
    private Date createdAt;

    public Customer() {
    }

    public Customer(String name, String passwordHash, String email, String lastName) {
        this.name = name;
        this.passwordHash = BCrypt.hashpw(passwordHash, BCrypt.gensalt());
        this.email = email;
        this.lastName = lastName;
        createdAt = new Date();
    }

    /**
     * This method creates a Customer
     * 
     * @param customerDto
     */
    public Customer(String id, String name, String password, String email, String lastName, Date createdAt) {
        this.id = id;
        this.name = name;
        passwordHash = BCrypt.hashpw(password, BCrypt.gensalt());
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

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public List<RoleEnum> getRoles() {
        return roles;
    }

    public void setRoles(List<RoleEnum> roles) {
        this.roles = roles;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public CustomerDto toCustomerDTO() {
        return new CustomerDto(id, name, email, lastName, createdAt.toString());
    }

    public void addRol(RoleEnum rol) {
        roles.add(rol);
    }
}
