import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";

import { connect } from "react-redux";
import { adjustQty, removeFromCart } from "../../../redux/shopping/shopping-action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDeleteLeft} from "@fortawesome/free-solid-svg-icons"


const CartItem = ({ item, adjustQty, removeFromCart }) => {
     
     
    console.log(item)
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

 

  return (
    <div>
         <div style={{display:"flex",justifyContent:"space-between"}} >
           <h4>PRODUCT</h4>
           <div className={styles.qtyprice}>
           <h4>QTY</h4>
           <h4>PRICE</h4>
           </div>
       </div>
        <hr/>
    <div className={styles.cartItem}>
        
        <img
          className={styles.cartItem__image}
          src={item.image}
          alt={item.title}
        />
        
          
          {/* <p className={styles.details__desc}>{item.description}</p> */}
          
        
       
          <div className={styles.cartItem__qty}>
          <p className={styles.details__title}>{item.title}</p>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={input}
              onChange={onChangeHandler}
            />
            <p className={styles.details__price}>Rs. {item.price}.00</p>

            <button
            onClick={() => removeFromCart(item.id)}
            className={styles.actions__deleteItemBtn}
          >
            <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
          </button>
          </div>
         
        
        
      </div>
      <hr/>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);