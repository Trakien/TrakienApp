package co.trakien.entities;

import java.util.HashMap;

public class Item {

    private String category;
    private String name;
    private HashMap<String, Store> stores;

    public Item() {
    }

    public Item(String category, String name, HashMap<String, Store> stores) {
        this.category = category;
        this.name = name;
        this.stores = stores;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public HashMap<String, Store> getStores() {
        return stores;
    }

    public void setStores(HashMap<String, Store> stores) {
        this.stores = stores;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

}
