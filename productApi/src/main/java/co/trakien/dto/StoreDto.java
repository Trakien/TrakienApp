package co.trakien.dto;

import java.util.Date;
import java.util.List;

import co.trakien.entities.Store;

public class StoreDto {

    private String name;
    private String url;
    private List<String> prices;
    private List<Date> updateDates;

    public StoreDto() {
    }

    public StoreDto(String name, String url, List<String> prices, List<Date> updateDates) {
        this.name = name;
        this.url = url;
        this.prices = prices;
        this.updateDates = updateDates;
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

    public Store toStore() {
        return new Store(name, url, prices, updateDates);
    }

    public List<Date> getUpdateDates() {
        return updateDates;
    }

    public void setUpdateDates(List<Date> updateDates) {
        this.updateDates = updateDates;
    }

    public Store toEntity() {
        return new Store(name, url, prices, updateDates);
    }

}
