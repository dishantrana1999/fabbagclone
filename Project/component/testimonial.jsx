import React from 'react'
import { Carousel } from 'react-bootstrap';
import  Styles from "./product.module.css";
const Testimonial = () => {
  return (
    <>
<div className={Styles.testimonial}>
<div className={Styles.heading}>
<h3 className={Styles.title}>
<span >TESTIMONIALS</span>
</h3>
   </div>
<div>
<Carousel indicators={false}>
  <Carousel.Item interval={1000}>
   <div className={Styles.testmain}>
<div className={Styles.testcenter}><i className="fa-solid fa-quote-left"></i></div>
<p className={Styles.testpara}>The products are amazing and I am just in love with the bag! Kudos to you team!</p>
<p className={Styles.testpara2}>Niranjana</p>
   </div>
   
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <div className={Styles.testmain}>
    <div  className={Styles.testcenter}><i  className="fa-solid fa-quote-left"></i></div>
    <p className={Styles.testpara}>Who doesn't want to get pampered? And this bag is all you need when you want to show some extra love to yourself. Every other product is of the 
    best quality. And top of it doesn't burn a hole in your pocket. Every month I just wait for my bag as a small kid waits for her favourite toy. This Fab Bag is an upright bliss.</p>
<p className={Styles.testpara2}>Anushree</p>
    </div>
   
  </Carousel.Item>
  <Carousel.Item>
   <div className={Styles.testmain}>
   <div  className={Styles.testcenter}><i  className="fa-solid fa-quote-left"></i></div>
   <p className={Styles.testpara}>I've been a regular Fab Bag subscriber for many years now and I must say that the 
   Fab Bag team comes up with something or the other as a special attraction in the bag every month.  As always, thank you Fab Bag for making my day with this bag!!!</p>
<p className={Styles.testpara2}>Poonam</p>

   </div>
    
  </Carousel.Item>
  <Carousel.Item>
    <div className={Styles.testmain}>
    <div  className={Styles.testcenter}><i  className="fa-solid fa-quote-left"></i></div>
    <p className={Styles.testpara}>I like the fact that they offer high-quality products. Every single product from the bag stands out. It is a MUST TRY for every girl out there.</p>
<p className={Styles.testpara2}>Shikha</p>

    </div>
    
  </Carousel.Item>
  <Carousel.Item>
  <div className={Styles.testmain}>
  <div  className={Styles.testcenter}><i className="fa-solid fa-quote-left"></i></div>
  <p className={Styles.testpara}>This is my second month and I am already addicted. Can't wait for my third bag. It feels like someone with so much love who loves pampering you. 
  Thank you Fab bag. Amazing products Thank you with gratitude.</p>
  <p className={Styles.testpara2}>Kirthana</p>
  </div>
    
  </Carousel.Item>
</Carousel>






</div>




</div>





    </>
  )
}

export default Testimonial
