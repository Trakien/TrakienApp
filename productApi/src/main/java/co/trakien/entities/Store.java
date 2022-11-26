package co.trakien.entities;

import java.util.Date;
import java.util.List;

import co.trakien.dto.StoreDto;

public class Store {

    private String name;
    private String url;
    private List<String> prices;
    private List<Date> updateDates;

    public Store() {
    }

    public Store(String name, String url, List<String> prices, List<Date> updateDates) {
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

    public List<Date> getUpdateDates() {
        return updateDates;
    }

    public void setUpdateDates(List<Date> updateDates) {
        this.updateDates = updateDates;
    }

    public StoreDto toDto() {
        return new StoreDto(name, url, prices, updateDates);
    }

}
