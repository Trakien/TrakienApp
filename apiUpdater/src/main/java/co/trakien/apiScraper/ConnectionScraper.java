package co.trakien.apiScraper;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class ConnectionScraper {

    private static final String GET_URL = "http://webscraper:5000/api/v2/scraping";

    public static HttpResponse<String> getApi(String url) throws IOException, InterruptedException {
        String json = new StringBuilder()
                .append("{")
                .append("\"url\":\"" + url + "\"")
                .append("}").toString();
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .uri(URI.create(GET_URL))
                .header("Content-Type", "application/json")
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response;
    }

}
