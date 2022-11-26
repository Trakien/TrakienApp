import React from "react";
import ProductCard from "./productCard.component";
import Box from "@mui/material/Box";
import styles from "../../styles/dashboard/Products.module.css";

export default class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.getMin = this.getMin.bind(this);
  }

  getMin(data, opt) {
    let first = data[0];
    let minPrice = first.prices[0];
    let minUrl = first.url;
    let minName = first.name;
    let updateDate = new Date(first.updateDates[0]);

    data.map((unit) => {
      if (unit.prices[0] < minPrice) {
        minPrice = unit.prices[0];
        minUrl = unit.url;
        minName = unit.name;
        updateDate = new Date(unit.updateDates[0]);
      }
    });
    return opt === "price"
      ? minPrice
      : opt === "url"
      ? minUrl
      : opt === "date"
      ? updateDate.toLocaleDateString("en-US")
      : minName;
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
              updateDates={this.getMin(product.stores, "date")}
              prices={this.getMin(product.stores, "price")}
              url={this.getMin(product.stores, "url")}
              minName={this.getMin(product.stores, "name")}
              stores={product.stores}
              key={product.id}
            />
          ))}
      </Box>
    );
  }
}
