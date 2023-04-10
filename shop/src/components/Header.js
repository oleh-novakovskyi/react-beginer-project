import React, {useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  return (<div> 
    {props.orders.map(el => (
      <Order key={el.id} product={el} />
    ))}
  </div> )
}

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Shopping cart is empty</h2>
    </div>
  )
}
 

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
            {props.orders.length > 0 ?
            showOrders(props) : showNothing()} 
        </div>
      )}
      <div className="presentation"></div>
    </header>
  );
};