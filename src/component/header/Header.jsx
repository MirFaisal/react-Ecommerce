import React from "react";
import Logo from "../../assets/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="navbar">
          <div className="brand-name">
            <img src={Logo} alt="" />
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                Order
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Order Review
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Manage Inventory
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
