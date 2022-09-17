package co.trakien.dto;

import java.lang.reflect.Type;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import co.trakien.entities.Product;
import co.trakien.entities.Store;

public class ProductDto {

    private String id;
    private String ref;
    private String name;
    private String category;
    private String updateDates;
    private String stores;

    public ProductDto() {
    }

    public ProductDto(String id, String ref, String name, String category, String updateDates, String stores) {
        this.id = id;
        this.ref = ref;
        this.name = name;
        this.category = category;
        this.updateDates = updateDates;
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

    public String getStores() {
        return stores;
    }

    public void setStores(String stores) {
        this.stores = stores;
    }

    public String getUpdateDates() {
        return updateDates;
    }

    public void setUpdateDates(String updateDates) {
        this.updateDates = updateDates;
    }

    public Product toProduct() {
        String replace = updateDates.replace("[", "");
        String replace1 = replace.replace("]", "");
        List<String> updateDatesListString = new ArrayList<String>(Arrays.asList(replace1.split(",")));
        List<Date> updateDatesList = new ArrayList<Date>();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yy-MM-dd");
        for (String string : updateDatesListString) {
            try {
                updateDatesList.add(simpleDateFormat.parse(string));
            } catch (ParseException e) {
                return null;
            }
        }
        Gson gson = new Gson();
        Type tipoListaStores = new TypeToken<List<Store>>() {
        }.getType();
        List<Store> storeList = gson.fromJson(stores, tipoListaStores);

        return new Product(id, ref, name, category, updateDatesList, storeList);
    }
}
