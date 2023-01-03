import React, { useContext, useEffect, useState } from "react";
import { amazon } from "../img";
import { Link } from "react-router-dom";
import "./User.css";
import { store } from "../App";
import axios from "axios";
import { useHistory } from "react-router-dom";
export const User = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userData, dispatch } = useContext(store);

  const history = useHistory();

  useEffect(() => {
    var data = JSON.parse(localStorage.getItem("userdata"));
    dispatch({ type: "local_state", payload: data });
  });

  function checkUser() {
    axios
      .post("https://9oker.sse.codesandbox.io/userAuth", {
        email: email,
        password: password
      })
      .then((res) => {
        console.log(res);
        if (res.data === false) {
          alert("invalid account or incorrect password");
        } else {
          dispatch({ type: "fetch_data_user", payload: res.data });
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="main">
      <div className="register">
        <Link to="/">
          <img src={amazon} alt="logo" height="100" />
        </Link>
        <input
          type="email"
          required
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={checkUser}>submit</button>
      </div>
      <h4>no account</h4>
      <h4 className="alt">
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            textDecorationColor: "none",
            color: "orange"
          }}
        >
          create an account
        </Link>
      </h4>
    </div>
  );
};
