import React from "react";
import ProductCard from "./productCard.component";
import Box from "@mui/material/Box";
import styles from "../styles/dashboard/Products.module.css";

export default class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.getMin = this.getMin.bind(this);
  }

  getMin(data, opt) {
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

  render() {
    return (
      <Box className={styles.products}>
        {this.props.products
          .slice(
            this.props.page * this.props.items,
            this.props.page * this.props.items + this.props.items
          )
          .map((product) => (
            <ProductCard
              name={product.name}
              brand={product.brand}
              updateDates={product.updateDates.slice(1, -1).split(",")}
              prices={this.getMin(product.stores, "price")}
              url={this.getMin(product.stores, "url")}
              minName={this.getMin(product.stores, "name")}
              key={product.id}
            />
          ))}
      </Box>
    );
  }
}
