package co.trakien.dto;

import java.util.List;

import co.trakien.entities.Product;
import co.trakien.entities.Store;

public class ProductDto {

    private String id;
    private String ref;
    private String name;
    private String category;
    private String brand;
    private List<Store> stores;

    public ProductDto() {
    }

    public ProductDto(String id, String ref, String name, String category, String brand,
            List<Store> stores) {
        this.id = id;
        this.ref = ref;
        this.name = name;
        this.category = category;
        this.brand = brand;
        this.stores = stores;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
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

    public String getRef() {
        return ref;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }

    public List<Store> getStores() {
        return stores;
    }

    public void setStores(List<Store> stores) {
        this.stores = stores;
    }

    public Product toProduct() {
        return new Product(id, ref, name, category, brand, stores);
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

}
