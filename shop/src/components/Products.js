import React, { Component } from "react";
import Product from "./Product";

export class Products extends Component {
  render() {
    return (
      <main>
        {this.props.products.map((el) => (
          <Product
            onShowProduct={this.props.onShowProduct}
            key={el.id}
            product={el}
            onAdd={this.props.onAdd}
          />
        ))}
      </main>
    );
  }
}
export default Products;
