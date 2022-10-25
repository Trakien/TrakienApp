import ProductCard from "../../components/productCard";
import Grid from "@mui/material/Grid";
import Router from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProduct] = useState([]);
  function getTasks() {
    fetch("http://localhost:4599/api/v2/products", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }

  function getMin(data, opt) {
    data = JSON.parse(data);
    let first = data[0];
    let minPrice = first.prices[first.prices.length - 1];
    let minUrl = first.url;
    let minName = first.name;
    data.map((unit) => {
      if (unit.prices[unit.prices.length - 1] < minPrice) {
        minPrice = unit.prices[unit.prices.length - 1];
        minUrl = unit.url;
        minName = unit.name;
      }
    });
    return opt === "price" ? minPrice : opt === "url" ? minUrl : minName;
  }

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="container">
      <title>Products</title>
      <main>
        <h1 className="title">Products</h1>
        <Grid item xs={12} sm={12} md={4}>
          {products.map((product) => (
            <ProductCard
              name={product.name}
              updateDates={product.updateDates.slice(1, -1).split(",")}
              prices={getMin(product.stores, "price")}
              url={getMin(product.stores, "url")}
              minName={getMin(product.stores, "name")}
              key={product.id}
            />
          ))}
        </Grid>
      </main>
    </div>
  );
}
