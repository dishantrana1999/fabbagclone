import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//  import styles from "product.module.css"
 import "./Product.css";

// Redux
import { connect } from "react-redux";
import { addToCart, loadCurrentItem } from "../../../redux/shopping/shopping-action";
import Subscription from "./subscription";


const Product = ({ product, addToCart, loadCurrentItem }) => {
  const [set,show] = useState(true)
  const handlePlan =() => {
    // set(false) 
    show((set)=>!set)
    
  }
  
  const handleDes =() => {
    // set(true) 
    show((set)=>!set)
  }

  

  const handlePolicy =() => {
    // set(true) 
    show((set)=>!set)
  }

  
  const handleReviews =() => {
    // set(true) 
    show((set)=>!set)
  }

  // <div className={styles.product}>
  //     <img
  //       className={styles.product__image}
  //       src={product.image}
  //       alt={product.title}
  //     />

  //     <div className={styles.product__details}>
  //       <p className={styles.details__title}>{product.title}</p>
  //       <p className={styles.details__desc}>{product.description}</p>
  //       <p className={styles.details__price}>$ {product.price}</p>
  //     </div>

  //     <div className={styles.product__buttons}>
  //       <Link to={`/product/${product.id}`}>
  //         <button
  //           onClick={() => loadCurrentItem(product)}
  //           className={`${styles.buttons__btn} ${styles.buttons__view}`}
  //         >
  //           View Item
  //         </button>
  //       </Link>
  //       <button
  //         onClick={() => addToCart(product.id)}
  //         className={`${styles.buttons__btn} ${styles.buttons__add}`}
  //       >
  //         Add To Cart
  //       </button>
  //     </div>
  //   </div>

  return (
    <>
      {/* 1st Part */}
      <div id="boxes">
        <div id="firstbox">
          <img
            src={product.image}
            alt=""
          />
        </div>
        <div id="secondbox">
          <p className="p">Home</p>
          <h1>{product.title}</h1>
          <h1>{product.price}</h1>
          <p>
            {product.description}
          </p>
          <h3>Plans</h3>

          <div id="buttons">
            <button> 1 Month</button>
            <button> 3 Month</button>
          </div>

          <button onClick={() => addToCart(product.id)} id="but">ADD TO CART</button>

          <div id="icon">
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-google-plus"></i>
          </div>
        </div>
      </div>
      {/* 2nd Part */}
      <div>
        <div id="conti">
          <div >DESCRIPTION</div>
          {/* onClick={handleDes} */}
          <div onClick={handlePlan}>VIEW PLANS</div>
          <div onClick={handlePolicy}> RETURN POLICY</div>
          <div onClick={handleReviews}>CUTOMER REVIEWS</div>
        </div>
<span>
<div id="des" style ={{visibility:set? "visible":"hidden"}}>
          <div className="fon">
            Phew, it's getting hot in here! Unveil the midsummer madness with
            the hottest beauty staples inside the AweSummer May Fab Bag.
          </div>

          <div className="fon">
            Here's what you can expect inside your May Fab Bag:
          </div>
          <ul className="fon">
            <li>SUGAR Own The Light Liquid Highlighter of your choice!*</li>
            <li>SUGAR Smudge Me Not Liquid Lipstick Mini of your choice!*</li>
            <li>Haircare Duo</li>
            <li>Organic Soap</li>
            <li>Bonus*</li>
          </ul>

          <div className="font">
            *Two offers cannot be clubbed. Makeup choice will be available on
            the order confirmation page, on a first-come, first-served basis.
            Bonus product will be customized by the Fab Bag Crew.{" "}
          </div>
          <div className="font">

            FAB BAG delivers the best of beauty and makeup products once a
            month, customized just for you.
          </div>
        </div>
        <Subscription/>
</span>
      


        {/* <div classNameName="plans"><p>roja</p></div>
        <div classNameName="policy"><p>map</p></div>
        <div classNameName="review"><p>haty</p></div> */}
      </div>





    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);

