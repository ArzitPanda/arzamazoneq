import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  createContext
} from "react";
import "./MediaCard.css";
import { store } from "../App";
import reducer from "../Reducer";
export default function MediaCard(props) {
  const { data } = props.data;
  const initialData = {
    userid: null,
    email: null,
    password: null,
    name: null,
    cart: [],
    order: []
  };

  const obj = useContext(store);
  const { userData, dispatch } = obj;

  const handleCart = (elem) => {
    // console.log(userData);
    dispatch({ type: "add_to_cart", payload: elem });
  };

  return (
    <div className="container">
      {data.map((elem) => {
        return (
          <div className="main-card" key={elem._id}>
            <img src={elem.url} alt="product" width="150" />
            <div className="product">
              <div className="product-details">
                <h4>{elem.name}</h4>
                <h3>{`$ ${elem.price}`}</h3>
              </div>
              <button className="add" onClick={() => handleCart(elem)}>
                add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
