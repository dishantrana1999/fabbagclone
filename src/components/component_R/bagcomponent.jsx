import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import  Styles from "./product.module.css";

 export const Bagcomponent = () => {
 const navigate=useNavigate()
 
  const handlegotoProduct=()=>{
     navigate("/")
  }
 
  return (
   <>
   <div className={Styles.heading}>
<h3 className={Styles.title}>
<span >WHAT'S IN THE BAG</span>
</h3>
   </div>
<div className={Styles.main}>
<Carousel>
  <Carousel.Item interval={10000}>
  <div className={Styles.maindiv}>
  <div onClick={handlegotoProduct} className={Styles.img}>
  <img className={Styles.img}   src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-Makeup-1_3b816288-c67c-45f5-be14-b43738b3debc_2048x.png?v=1651562814"/>
  <p className={Styles.para} >SUGAR Own The Light Liquid Highlighter of your choice!*</p>
  </div>
  <div  onClick={handlegotoProduct} className={Styles.img}>
  <img className={Styles.img} src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-Makeup-2_b1d2533b-4810-4f7e-9321-7d0cca0b019f_2048x.png?v=1651344579"/>
  <p className={Styles.para}>Liquid Lipstick of your choice!*</p>
  </div>
  <div onClick={handlegotoProduct} className={Styles.img}>
  <img className={Styles.img}  src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-Skincare-1_cf1f2eb6-e64c-4dcb-af8b-f80963cceddd_2048x.png?v=1651344625"/>
  <p className={Styles.para}>Haircare Duo</p>
  </div>
  <div onClick={handlegotoProduct} className={Styles.img}>
  <img  className={Styles.img}  src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-Skincare-2_2_2048x.png?v=1651466768"/>
  <p className={Styles.para}>Organic Soap</p>
  </div>


  </div> 
   
  </Carousel.Item>
  <Carousel.Item interval={500}>
   
   <div className={Styles.maindiv} >
   <div onClick={handlegotoProduct} className={Styles.img}>
  <img className={Styles.img}  src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-Makeup-2_b1d2533b-4810-4f7e-9321-7d0cca0b019f_2048x.png?v=1651344579"/>
  <p className={Styles.para}>Liquid Lipstick of your choice!*</p>
  </div>
  <div onClick={handlegotoProduct} className={Styles.img}>
  <img className={Styles.img}  src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-Skincare-1_cf1f2eb6-e64c-4dcb-af8b-f80963cceddd_2048x.png?v=1651344625"/>
  <p className={Styles.para}>Haircare Duo</p>
  </div>
  <div onClick={handlegotoProduct} className={Styles.img}>
  <img  className={Styles.img}  src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-Skincare-2_2_2048x.png?v=1651466768"/>
  <p className={Styles.para}>Organic Soap</p>
  </div>

  
    <div onClick={handlegotoProduct}  className={Styles.img}>
    <img  className={Styles.img}  src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-Bonus_2048x.gif?v=1651344727"/> 
    <p className={Styles.para}>Bonus*</p>  
   </div> 
   </div>
  </Carousel.Item>
  
</Carousel>




</div>


   </>
  )
}

export default Bagcomponent




