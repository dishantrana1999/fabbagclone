import React, { useState } from "react";
import "./Product.css";
import Subscription from "./subscription";

const Product = () => {
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

  return (
    <>
      {/* 1st Part */}
      <div id="boxes">
        <div id="firstbox">
          <img
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-1.gif?v=1651909062"
            alt=""
          />
        </div>
        <div id="secondbox">
          <p class="p">Home</p>
          <h1>The AweSummer May Fab Bag</h1>
          <h1>Rs. 599.00</h1>
          <p>
            Phew, it's getting hot in here! Unveil the midsummer madness with
            the hottest beauty staples inside the...
          </p>
          <h3>Plans</h3>

          <div id="buttons">
            <button> 1 Month</button>
            <button> 3 Month</button>
          </div>

          <button id="but">ADD TO CART</button>

          <div id="icon">
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-facebook"></i>
            <i class="bx bxl-google-plus"></i>
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
          <div class="fon">
            Phew, it's getting hot in here! Unveil the midsummer madness with
            the hottest beauty staples inside the AweSummer May Fab Bag.
          </div>

          <div class="fon">
            Here's what you can expect inside your May Fab Bag:
          </div>
          <ul class="fon">
            <li>SUGAR Own The Light Liquid Highlighter of your choice!*</li>
            <li>SUGAR Smudge Me Not Liquid Lipstick Mini of your choice!*</li>
            <li>Haircare Duo</li>
            <li>Organic Soap</li>
            <li>Bonus*</li>
          </ul>

          <div class="font">
            *Two offers cannot be clubbed. Makeup choice will be available on
            the order confirmation page, on a first-come, first-served basis.
            Bonus product will be customized by the Fab Bag Crew.{" "}
          </div>
          <div class="font">

            FAB BAG delivers the best of beauty and makeup products once a
            month, customized just for you.
          </div>
        </div>
        <Subscription/>
</span>
       <span>
       <div style ={{visibility:show? "hidden":"visible"}}><p>roja</p></div>
       </span>
       <span>
       <div style ={{visibility:show? "visible":"hidden"}}><p>map</p></div>
       </span>
        
      <span>
      <div style ={{visibility:show? "visible":"hidden"}}><p>haty</p></div>
      </span>


        {/* <div className="plans"><p>roja</p></div>
        <div className="policy"><p>map</p></div>
        <div className="review"><p>haty</p></div> */}
      </div>





    </>
  );
};

export default Product;
