import React from 'react'
import  styles from "./Product.module.css";

const Commonsubs = (props) => {
    const {h1,Pricepermonth,oneTime,oneTimepayment}=props
  return (
   <>
<div className={styles.subscommon}>
<div className={styles.first}>
    <h2 className={styles.head}>{h1}</h2>
    <p>SUBSCRIPTION</p>
</div>
<div  className={styles.second}>
    <h2 className={styles.head} >{Pricepermonth}</h2>
    <p>/ per month</p>
</div>
<div  className={styles.third}>
    <h5 className={styles.head1}>{oneTime}</h5>
    <h2 className={styles.head} >{oneTimepayment}</h2>
</div>

<div className={styles.sub}>
<button type="submit" className={styles.btn} >ADD TO CART</button>
	</div>



</div>




   </>
  )
}

export default Commonsubs