import React, {useState} from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {

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
          <h1>Cart</h1>
        </div>
      )}
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
