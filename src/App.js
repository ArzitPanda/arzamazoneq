import "./styles.css";
import axios from "axios";
import { useState, useEffect, createContext, useReducer } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import MediaCard from "./Cards/MediaCard";
// import Order from "./Order/Order";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { User } from "./Pages/user";
import { Signup } from "./Pages/Signup";

import Cart from "./Cart/Cart";
// import {store} from './Context';
import reducer from "./Reducer";

export const store = createContext();

export default function App() {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const [cart, setCart] = useState([]);

  // const [totalItem, setTotalItem] = useState(0);
  const initialData = {
    _id: null,
    email: null,
    password: null,
    name: null,
    userCart: [],
    userOrder: []
  };

  const [userData, dispatch] = useReducer(reducer, initialData);

  // console.log(userData);
  useEffect(() => {
    axios
      .get("https://9oker.sse.codesandbox.io/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  useEffect(() => {
    axios
      .put(`https://9oker.sse.codesandbox.io/user/${userData._id}`, {
        cart: userData.userCart
      })
      .then((res) => {
        //console.log(res);

        console.log(userData);
        if (!userData._id) {
          localStorage.setItem("userdata", JSON.stringify(userData));
          console.log("sucessfully");
        }
      })
      .catch((err) => console.log(err));
  }, [userData]);

  const [sidebar, setSidebar] = useState(false);
  const source =
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21/Event-Page-Phase-3/1500x280_PC_store_header_P3_EN.jpg";

  return (
    <div className="App">
      <store.Provider value={{ userData: userData, dispatch: dispatch }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Sidebar sidebar={{ sidebar, setSidebar }} />
              <Navbar sidebar={{ sidebar, setSidebar }} />
              <img src={source} className="banner" alt="hello" />
              <MediaCard data={{ data }} />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <User />
            </Route>
            <Route exact path="/cart">
              <Sidebar sidebar={{ sidebar, setSidebar }} />
              <Navbar sidebar={{ sidebar, setSidebar }} />
              <Cart cart={{ cart, setCart }} />
            </Route>
          </Switch>
        </Router>
      </store.Provider>
    </div>
  );
}
