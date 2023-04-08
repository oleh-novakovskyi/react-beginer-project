import React, {Component} from "react";
import Product from "./Product";

export class Products extends Component {
    render() {
        return (
            <main>
                {this.props.products.map(el => (
                    <Product key={el.id} product={el} />                   
                ))}
            </main>
        )
    }
}
export default Products;