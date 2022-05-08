import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <div className="header-container">
      <div>
        <h2 style={{ color: "#e5ba61" }}>Subscribe Now</h2>
      </div>
      <div>
        {" "}
        <img
          src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289"
          alt=""
        />
      </div>
      <div>
        <div className="searchbutton">
          <i className="fa-solid fa-magnifying-glass"></i>
          <div className="searchBar">Search</div>
        </div>
        <i className="fa-solid fa-heart"></i>
        <div className="dropdown">
          <i className="fa-solid fa-user dropbtn"></i>
          <div className="dropdown-content">
            <a href="#">LInk 1</a>
            <a href="#">LInk 1</a>
            <a href="#">LInk 1</a>
          </div>
        </div>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
};
