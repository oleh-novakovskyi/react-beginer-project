import React, { Component } from "react";
import {FaTrash} from "react-icons/fa";
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
        <FaTrash className="delete-icon" onClick={() => this.props.onDelete(this.props.product.id)} />
      </div>
    );
  }
}

export default Order;
