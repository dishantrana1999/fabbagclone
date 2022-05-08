import React from 'react'
import { Carousel } from 'react-bootstrap';
import  Styles from "./product.module.css";
const Previousbag = () => {
    

  return (
   <>
<div className={Styles.heading}>
<h3 className={Styles.title}>
<span >PREVIOUS BAGS</span>
</h3>
   </div>
   
<div className={Styles.prev}>
<Carousel  indicators={false}>
  <Carousel.Item interval={10000}>
  <div className={Styles.maindiv}>
  <div>
  <img className={Styles.previmg}  src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_large.png?v=1646971494"/>
  <p className={Styles.prevpara} >Apr'22 The Sassy Spring Fab Bag</p>
 <p><span className={Styles.span}><em data-translate="from_price">from </em>Rs. 599.00</span></p> 
  </div>
  <div>
  <img className={Styles.previmg} src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-2_large.gif?v=1644395072"/>
  <p className={Styles.prevpara}>Mar'22 The Empow-HER Fab Bag</p>
  <p><span className={Styles.span} ><em data-translate="from_price">from </em>Rs. 599.00</span></p>
  </div>
  <div>
  <img className={Styles.previmg} src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal--3_large.png?v=1641707966"/>
  <p className={Styles.prevpara}>Feb'22 The Colour Me Cupid Fab Bag</p>
  <p><span className={Styles.span}><em data-translate="from_price">from </em>Rs. 599.00</span></p>
  </div>
  <div>
  <img  className={Styles.previmg} src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-3_large.gif?v=1638191014"/>
  <p className={Styles.prevpara}>Jan'22 The Beauty Resolution Fab Bag</p>
  <p><span className={Styles.span}><em data-translate="from_price">from </em>Rs. 599.00</span></p>
  </div>


  </div> 
   
  </Carousel.Item>
  <Carousel.Item interval={500}>
   
   <div className={Styles.maindiv} >
   <div>
  <img className={Styles.previmg} src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-2_large.gif?v=1644395072"/>
  <p className={Styles.prevpara}>Dec'21 The X-Must Haves Fab Bag</p>
  <p><span className={Styles.span}><em data-translate="from_price">from </em>Rs. 599.00</span></p>
  </div>
  <div>
  <img className={Styles.previmg} src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal--3_large.png?v=1641707966"/>
  <p className={Styles.prevpara}>Mar'22 The Empow-HER Fab Bag</p>
  <p><span  className={Styles.span}><em data-translate="from_price">from </em>Rs. 599.00</span></p>
  </div>
  <div>
  <img className={Styles.previmg} src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-3_large.gif?v=1638191014"/>
  <p className={Styles.prevpara}>Feb'22 The Colour Me Cupid Fab Bag</p>
  <p><span className={Styles.span}><em data-translate="from_price">from </em>Rs. 599.00</span></p>
  </div>
  <div>
  <img  className={Styles.previmg} src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPageBanner--Skincare-Reveal-4_1_large.gif?v=1636696484"/>
  <p className={Styles.prevpara}>Jan'22 The Beauty Resolution Fab Bag</p>
  <p><span className={Styles.span}><em data-translate="from_price">from </em>Rs. 599.00</span></p>
  </div>
   </div>
  </Carousel.Item>
  
</Carousel>

</div>


   </>
  )
}

export default Previousbag