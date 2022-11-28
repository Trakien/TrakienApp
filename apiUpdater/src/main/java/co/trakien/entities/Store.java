package co.trakien.entities;

import java.util.Date;
import java.util.List;

public class Store {

    private String name;
    private String url;
    private List<String> prices;
    private List<Date> updateDates;
    private String img;

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Store() {
    }

    public Store(String name, String url, List<String> prices, List<Date> updateDates, String img) {
        this.name = name;
        this.url = url;
        this.prices = prices;
        this.updateDates = updateDates;
        this.img = img;
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

    public List<Date> getUpdateDates() {
        return updateDates;
    }

    public void setUpdateDates(List<Date> updateDates) {
        this.updateDates = updateDates;
    }

    public void addUpdateDate(Date updateDate) {
        this.updateDates.add(updateDate);
    }

    public void addUpdateDates(List<Date> updateDates) {
        this.updateDates.addAll(updateDates);
    }

    public void addPrices(List<String> prices) {
        this.prices.addAll(prices);
    }

}
