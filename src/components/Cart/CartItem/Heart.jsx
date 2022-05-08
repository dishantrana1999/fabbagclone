import React from 'react'
import styles from "./Heart.module.css"

const Heart = () => {
  return (
    <div className={styles.heartparent}>
        <div>
            <h2>
Oops!
We can't seem to find the page you're looking for.</h2>
<h4>Error code: 404
Here are some helpful links instead:</h4>
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact us</li>
    <li>Subscribe Now</li>
</ul>
        </div>
        <img src='https://cdn.shopify.com/s/files/1/0052/7551/6995/files/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69_large.gif?v=1548941346'></img>
    </div>
  )
}

export default Heart