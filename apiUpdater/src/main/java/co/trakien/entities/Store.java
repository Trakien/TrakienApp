package co.trakien.entities;

import java.util.List;

public class Store {

    private String url;
    private List<String> prices;

    public Store() {
    }

    public Store(String url, List<String> prices) {
        this.url = url;
        this.prices = prices;
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

}
