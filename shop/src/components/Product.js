import React, {Component} from "react";

export class Product extends Component {
    render() {
        return (
            <div className="product">
                <div className="img-wrapper">
                    <img src={"./img/products/" + this.props.product.img} alt={this.props.title} />
                </div>
                <h2>{this.props.product.title}</h2>
                <p>Categiry: <b>{this.props.product.category}</b></p>
                <span>{this.props.product.price} ₴</span>
                <div className="add-to-cart">+</div>
            </div>
        )}
}
export default Product;