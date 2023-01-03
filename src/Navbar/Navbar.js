import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { SiAmazonprime } from "react-icons/si";
import { TiLocation } from "react-icons/ti";
import { GoSearch } from "react-icons/go";
import { AiOutlineShoppingCart, AiFillShopping } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { store } from "../App";
import "./Navbar.css";

const Navbar = (props) => {
  const { userData, dispatch } = useContext(store);

  const { sidebar, setSidebar } = props.sidebar;
  return (
    <div className="nav">
      <div className="nav-container">
        <SiAmazonprime size={180} color="white" className="amz-logo" />
        <div className="location">
          <TiLocation size={30} color="white" />
          <h5>select address</h5>
        </div>
        <div className="search">
          <input className="search-box" />
          <div className="searchlogo">
            <GoSearch color="black" size={20} />
          </div>
        </div>
        <div className="location">
          <AiFillShopping size={35} color="white" />
          <h5>orders& return</h5>
        </div>
        <Link to="/login">
          <div className="location">
            <CgProfile size={30} color="white" />
            <h5 id="profile">
              {userData.name ? userData.name : `signin&profile`}
            </h5>
          </div>
        </Link>
        <Link to="/cart">
          <div className="cart">
            <AiOutlineShoppingCart color="white" size={35} />
            <h5>3</h5>
          </div>
        </Link>
      </div>
      <div className="contents-content">
        <GiHamburgerMenu
          color="white"
          size={30}
          style={{ marginRight: "100px", cursor: "pointer" }}
          onClick={() => setSidebar(true)}
        />
        <div className="contents">mobile</div>
        <div className="contents">computer</div>
        <div className="contents">kitchen</div>
        <div className="contents">gaming</div>
        <div className="contents">grocery</div>
        <div className="contents">lifestyle</div>
        <div className="contents">grooming</div>
        <div className="contents">acessories</div>
        <div className="contents" style={{ marginRight: "70px" }}>
          others
        </div>
      </div>
    </div>
  );
};

export default Navbar;
