package co.trakien.saver.storesSaver;

import co.trakien.saver.Saver;

public class KKKKSaver implements Saver {

    private String name;

    public KKKKSaver(String name) {
        this.name = name;
    }

    @Override
    public String save(String url) {
        return "KtronixSaver";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
