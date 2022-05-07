import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Product from "./Product/Product";

import styles from"./Products.module.css";


const Products =({products})=>{

  
   
    return (
        <div className={styles.Products}>
            {
                products.map((prod)=>(
                    <Product key={prod.id} product={prod}/>
                ))
            }
        </div>
    )
}


const mapStateTOProps =(state)=>{
    return {
        products: state.shop.products,
    }
}

export default connect(mapStateTOProps)(Products);