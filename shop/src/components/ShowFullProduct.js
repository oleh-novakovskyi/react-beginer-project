import React, { Component } from "react";

export class ShowFullProduct extends Component {
  render() {
    return (
      <div className="full-product">
        <div>
          <img
            src={"./img/products/" + this.props.product.img}
            alt={this.props.title}
            onClick={() => this.props.onShowProduct(this.props.product)}
          />

          <h2>{this.props.product.title}</h2>
          <p>
            Size: <b>{this.props.product.category}</b>
          </p>
          <p>
            Description:<br/> <b>{this.props.product.desc}</b>
          </p>
          <span>{this.props.product.price} ₴</span>
          <div
            className="add-to-cart"
            onClick={() => this.props.onAdd(this.props.product)}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullProduct;
