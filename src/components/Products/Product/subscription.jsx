import React from 'react'
import  styles from "./Product.module.css";
import Commonsubs from './commonsubs';
import "./Product.css";
const Subscription = () => {
   let data=[
       { 
           id:1,h1:"1 MONTH",Pricepermonth:"Rs. 599.00",oneTime:'ONE TIME PAYMENT',oneTimepayment:"Rs. 599.00",
        },
    { 
     id:2 ,h1:"3 MONTH",Pricepermonth:"Rs. 533.00",oneTime:'ONE TIME PAYMENT (11% OFF)',oneTimepayment:"Rs. 1,599.00  Rs. 1,797",}]
  return (
      <>
<div className={styles.heading}>
<h3 className={styles.title}>
<h1 style={{textAlign:"center"}} >Subscription</h1>
</h3>
   </div>

   <div className={styles.subs}>
       {data.map((item)=>{
           return <Commonsubs key={item.id} {...item}/>
       })}
   </div>


      </>

  )
   
}

export default Subscription