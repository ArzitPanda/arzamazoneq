import React, { useContext, useState } from "react";
import { amazon } from "../img";
import { Link } from "react-router-dom";
import "./User.css";
import { store } from "../App";
import axios from "axios";
import { useHistory } from "react-router-dom";
export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const { userData, dispatch } = useContext(store);
  const [temp, setTemp] = useState({});
  const [cond, setCond] = useState(false);

  const history = useHistory();
  function handleRegd() {
    axios
      .post("https://9oker.sse.codesandbox.io/user", {
        name,
        email,
        password,
        phone: number
      })
      .then((res) => {
        console.log(res);
        setTemp(res.data);
        setCond(true);
        setTimeout(() => {
          alert("sucesfully created");
          history.push("/login");
        }, 300);
      })
      .catch((err) => console.log(err));
    setName("");
    setEmail("");
    setPassword("");
    setNumber("");
  }

  return (
    <div className="main">
      {/* {cond === true && <div>sucesfully created</div>} */}
      <div className="register">
        <Link to="/">
          <img src={amazon} alt="logo" height="100" />
        </Link>
        <input
          type="text"
          required
          placeholder="enter your fullname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          required
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          required
          maxLength="12"
          minLength="10"
          placeholder="enter your phoneNumber"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegd}>Register</button>
      </div>
      <div className="bottom">
        <h3>already an account!</h3>
        <h4 className="alt">
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              textDecorationColor: "none",
              color: "orange"
            }}
          >
            log in
          </Link>
        </h4>
      </div>
    </div>
  );
};
