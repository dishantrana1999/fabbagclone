import React from 'react'
import  Styles from "./product.module.css";
const Commonsubs = (props) => {
    const {h1,Pricepermonth,oneTime,oneTimepayment}=props
  return (
   <>
<div className={Styles.subscommon}>
<div className={Styles.first}>
    <h2 className={Styles.head}>{h1}</h2>
    <p>SUBSCRIPTION</p>
</div>
<div  className={Styles.second}>
    <h2 className={Styles.head} >{Pricepermonth}</h2>
    <p>/ per month</p>
</div>
<div  className={Styles.third}>
    <h5 className={Styles.head1}>{oneTime}</h5>
    <h2 className={Styles.head} >{oneTimepayment}</h2>
</div>

<div className={Styles.sub}>
<button type="submit" className={Styles.btn} >ADD TO CART</button>
	</div>



</div>




   </>
  )
}

export default Commonsubs