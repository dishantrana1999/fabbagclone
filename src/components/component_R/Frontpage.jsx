import React, { useEffect, useState } from 'react'

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from 'react-bootstrap';
import Main from './main';
import Bagcomponent from './bagcomponent';
import Subscription from './subscription';
import  Styles from "./product.module.css";
import Previousbag from './Previousbag';
import Testimonial from './testimonial';
import TrendingCorner from './trendingCorner';
import Shopify from './shopify';
 const Frontpage = () => {
  
  return (<>
 <div className={Styles.body}>

  <Main/>
  <Bagcomponent/>
  <Subscription/>
  <Previousbag />
  <Testimonial/>
  <TrendingCorner/>
  <Shopify/>
</div>
  </>
   
  )
}

export default Frontpage