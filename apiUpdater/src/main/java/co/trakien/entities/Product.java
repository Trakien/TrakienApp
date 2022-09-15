package co.trakien.entities;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

public class Product {

    private List<Date> updates;
    private HashMap<String, Item> brands;

    public Product() {
    }

    public Product(List<Date> updates, HashMap<String, Item> brands) {
        this.updates = updates;
        this.brands = brands;
    }

    public List<Date> getUpdates() {
        return updates;
    }

    public void setUpdates(List<Date> updates) {
        this.updates = updates;
    }

    public HashMap<String, Item> getBrands() {
        return brands;
    }

    public void setBrands(HashMap<String, Item> brands) {
        this.brands = brands;
    }

}
