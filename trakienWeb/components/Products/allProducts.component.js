import React from "react";
import ProductCard from "./productCard.component";

export default class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.getMin = this.getMin.bind(this);
  }

  getMin(data, opt) {
    let first = data[Math.floor(Math.random() * data.length)];
    let minPrice = first.prices[0];
    let minUrl = first.url;
    let minName = first.name;
    let updateDate = new Date(first.updateDates[0]);
    let img = first.img;
    data.map((unit) => {
      if (unit.prices[0] < minPrice) {
        minPrice = unit.prices[0];
        minUrl = unit.url;
        minName = unit.name;
        img = unit.img;
        updateDate = new Date(unit.updateDates[0]);
      }
    });
    return opt === "price"
      ? minPrice
      : opt === "url"
      ? minUrl
      : opt === "date"
      ? updateDate.toLocaleDateString("en-US")
      : opt === "img"
      ? img
      : minName;
  }

  render() {
    return (
      <>
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
              img={this.getMin(product.stores, "img")}
              stores={product.stores}
              key={product.id}
            />
          ))}
      </>
    );
  }
}
