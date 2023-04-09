import React, { Component } from "react";

export class Order extends Component {
  render() {
    return (
      <div className="product">
        <img
          src={"./img/products/" + this.props.product.img}
          alt={this.props.title}
        />
        <h2>{this.props.product.title}</h2>      
        <span>{this.props.product.price} ₴</span>
      </div>
    );
  }
}

export default Order;
