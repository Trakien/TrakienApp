package co.trakien.dto;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import co.trakien.entities.Store;

public class StoreDto {

    private String name;
    private String url;
    private String prices;

    public StoreDto() {
    }

    public StoreDto(String name, String url, String prices) {
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

    public String getPrices() {
        return prices;
    }

    public void setPrices(String prices) {
        this.prices = prices;
    }

    public Store toStore() {
        String replace = prices.replace("[", "");
        String replace1 = replace.replace("]", "");
        List<String> pricesList = new ArrayList<String>(Arrays.asList(replace1.split("")));
        return new Store(name, url, pricesList);
    }

}
