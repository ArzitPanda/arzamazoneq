import React, { useContext } from "react";
import "./Sidebar.css";
import { FaUserCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { store } from "../App";
import { useHistory } from "react-router-dom";
const Sidebar = (props) => {
  const history = useHistory();

  const { userData, dispatch } = useContext(store);

  const { sidebar, setSidebar } = props.sidebar;

  return (
    <div className={`sidebar${sidebar === true ? `show` : `hide`} `}>
      <div className="nav-side">
        <Link to="/login">
          <div className="profile">
            <FaUserCircle color="white" size={20} />
            <h3>{userData.name ? userData.name : `signin`}</h3>
          </div>
        </Link>
        <MdCancel
          size={25}
          className="mdcancel"
          onClick={() => setSidebar(false)}
        />
      </div>
      <div className="main">
        <div className="sidebar-content">
          <h3 className="heading">Trending</h3>
          <h4 className="content">Best Sellers</h4>
          <h4 className="content">New Release</h4>
          <h4 className="content">Movers and shakers</h4>
        </div>
        <div className="sidebar-content">
          <h3 className="heading">Programs & Features</h3>
          <h4 className="content">GiftCard&Mobile Recharge</h4>
          <h4 className="content">Flight Tickets</h4>
          <h4 className="content">Amazon Outlet</h4>
        </div>
        <div className="sidebar-content">
          <h3 className="heading">Help & Settings</h3>
          <h4 className="content">your Account</h4>
          <h4 className="content">Customer Service</h4>
          <Link to="/login" className="login">
            <h4 className="content" onClick>
              log out
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
