import React from 'react'
import {Carousel} from "react-bootstrap";
import { Img } from './Styling';
// import 
const Main = () => {
  
  return (<>

<Carousel>
  <Carousel.Item interval={1000}>
    <Img
      className="d-block w-100"
      src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-bAG-Reveal-Recovered_b18183de-8b77-490e-b6f9-78adbccd3ebb_2048x.png?v=1651344357"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <Img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_s-page---Reveal.gif?v=1591190792"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <Img
      className="d-block w-100"
      src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Makeup-Reveal-1_2156cf43-9cb3-4633-97d9-2c72b7059117_2048x.png?v=1651562755"
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
  



  </>
    
  )
}

export default Main