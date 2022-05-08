import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import {v4 as uuid} from "uuid"
import { Link, useNavigate } from "react-router-dom";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const Navigate =useNavigate()

 const handlecheckout=()=>{
   console.log(cart)
     if(cart.length==0){
      Navigate("/empty")
     }
     else{
      Navigate("/checkout")
     }
 }

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += +item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
     
  
   

  return (
    <div>
        
        <div className={styles.cart}>
        
       <div className={styles.cart__items}>
          
      
        <div>
        
        {cart.map((item) => (
            <>
             <CartItem key={item.id} item={item} />
           
            </>
          
         ))}
        </div>
       </div>
       <div className={styles.cart__summary}>
           <div className={styles.total_val}>
           <h5 className={styles.summary__title}>TOTAL PRICE:</h5>
           <h4>Rs. {totalPrice}.00</h4>
           </div>
         
         <div className={styles.summary__price}>
           <span>TOTAL: ({totalItems} items)</span>
      
         </div>
         <button onClick={handlecheckout} className={styles.summary__checkoutBtn}>
         Proceed To Checkout
         </button>
       </div>
     </div>
    </div>
  );
};


           
          
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);