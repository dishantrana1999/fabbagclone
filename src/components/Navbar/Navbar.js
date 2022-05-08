import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import "./Header.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  const navigate=useNavigate()
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  // <div className={styles.navbar}>
  //     <Link to="/">
  //       <h2  className={styles.navbar__logo}>SUBSCRIBE NOW</h2>
  //     </Link>
  //     <div className={styles.logohandler}>
  //         <img   src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289" />
  //     </div>
  //      <Link to="/signup">Signup</Link>
  //      <Link to="/home">Home</Link>
  //      <Link to="/product">Product</Link>
  //     <Link to="/cart">
  //       <div className={styles.navbar__cart}>
  //         <h3 className={styles.cart__title}>Cart</h3>
  //       <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
  //         <div className={styles.cart__counter}>{cartCount}</div>
  //       </div>
  //     </Link>
      
  //   </div>

  const handlehome =()=>{
    navigate("/")
  }

  const Gotocart=()=>{
    navigate("/cart")
  }
  const Gotosignup=()=>{
    navigate("/signup")
  }
  const Gotoheart=()=>{
    navigate("/heart")
  }



  return (
    <div className="header-container">
      <div>
        <h2 style={{ color: "#e5ba61" }}>Subscribe Now</h2>
      </div>
      <div>
        {" "}
        <img
           style={{cursor:"pointer"}} onClick={handlehome}  src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289"
          alt=""
        />
      </div>
      <div>
        <div className="searchbutton">
          <i className="fa-solid fa-magnifying-glass"></i>
          <div className="searchBar">Search</div>
        </div>
        <i onClick={Gotoheart} className="fa-solid fa-heart"></i>
        <div className="dropdown">
          <i onClick={Gotosignup} className="fa-solid fa-user dropbtn"></i>
          <div className="dropdown-content">
            <a href="#">LInk 1</a>
            <a href="#">LInk 1</a>
            <a href="#">LInk 1</a>
          </div>
        </div>
        <i onClick={Gotocart} className="fa-solid fa-cart-shopping">{cartCount}</i>
       
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);