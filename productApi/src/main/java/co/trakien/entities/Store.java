package co.trakien.entities;

import java.util.List;

import com.google.gson.Gson;

import co.trakien.dto.StoreDto;

public class Store {

    private String name;
    private String url;
    private List<String> prices;

    public Store() {
    }

    public Store(String name, String url, List<String> prices) {
        this.name = name;
        this.url = url;
        this.prices = prices;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public List<String> getPrices() {
        return prices;
    }

    public void setPrices(List<String> prices) {
        this.prices = prices;
    }

    public void addPrice(String price) {
        this.prices.add(price);
    }

    public void initPrices(int size) {
        for (int i = 0; i < size; i++) {
            this.prices.add(0, "0");
        }
    }

    @Override
    public boolean equals(Object store) {
        return ((Store) store).getName().equals(this.name);
    }

    public StoreDto toStoreDto() {
        return new StoreDto(name, url, prices.toString());
    }

    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this);
    }
}
