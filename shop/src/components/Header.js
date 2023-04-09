import React, {useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

export default function Header(props) {

  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">Blueberry Shop</span>
        <ul className="nav">
            <li>About us</li>
            <li>Contacts</li>
            <li>Profile</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}  className={`shop-cart-btn ${cartOpen && 'active'}`} />
      </div>
      {cartOpen && (
        <div className="shop-cart">
          {props.orders.map(el => (
            <Order key={el.id} product={el} />
          ))}
        </div>
      )}
      <div className="presentation"></div>
    </header>
  );
};