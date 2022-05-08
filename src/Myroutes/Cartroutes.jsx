import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/Cart/Cart'
import Checkout from '../components/Checkout/Checkout'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Products/Products'
import SingleItem from '../components/SingleItem/SingleItem'
import Empty from '../Empty/Empty'
import {SignUp} from "../components/LoginSignup/SignUp"
import {Login} from "../components/LoginSignup/Login"
import Frontpage from '../components/component_R/Frontpage'
import Product from '../components/Products/Product/Product'


const Cartroutes = ({current}) => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route exact path="/empty" element={<Empty/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/home"  element ={<Frontpage/>}/>
          <Route exact path="/product" element={<Product/>}/>
          
    {
      !current ? (
        <Route exact path="/" element={<Products/>} />
      ):(
<Route exact path="/product/:id" element={<SingleItem/>} />
      )
    }

          
        </Routes>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      current: state.shop.current,
    };
  };

export default connect(mapStateToProps)(Cartroutes)