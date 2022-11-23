package co.trakien.entities;

import java.util.List;

import org.springframework.data.annotation.Id;

import co.trakien.dto.ProductDto;

public class Product {

    @Id
    private String id;
    private String ref;
    private String name;
    private String category;
    private String brand;
    private List<Store> stores;

    public Product() {
    }

    public Product(String ref, String name, String category, String brand, List<Store> stores) {
        this.ref = ref;
        this.name = name;
        this.category = category;
        this.brand = brand;
        this.stores = stores;
    }

    public Product(String id, String ref, String name, String category, String brand,
            List<Store> stores) {
        this.id = id;
        this.ref = ref;
        this.name = name;
        this.category = category;
        this.brand = brand;
        this.stores = stores;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRef() {
        return ref;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<Store> getStores() {
        return stores;
    }

    public void setStores(List<Store> stores) {
        this.stores = stores;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public ProductDto toProductDto() {
        return new ProductDto(id, ref, name, category, brand, stores);
    }

}
