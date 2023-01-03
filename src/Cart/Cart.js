import React, { useState, useContext, useEffect } from "react";
import { store } from "../App";
import axios from "axios";
import "./Cart.css";
const Cart = (props) => {
  const { cart, setCart } = props.cart;
  // const [cart, setCart] = useState([]);
  const [temp, setTemp] = useState([]);
  const { userData, dispatch } = useContext(store);
  useEffect(() => {
    setTemp(userData.userCart);

    // setTemp(cart);
  }, [userData]);

  return (
    <div>
      {temp.map((elem) => {
        return (
          <div key={elem._id}>
            <img src={elem.url} alt="img" />
            <div>
              {elem.name} {elem.quantity}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
