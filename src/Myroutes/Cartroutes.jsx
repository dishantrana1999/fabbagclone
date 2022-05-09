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
import { Footer } from '../components/dishantNavbar/Footer'
import { Header } from '../components/dishantNavbar/Header'
import Heart from '../components/Cart/CartItem/Heart'
import CreditCard from '../components/Payment/CreditCard'
import Thankyou from '../components/Payment/paymentcomponents/Thankyou'


const Cartroutes = ({current}) => {
  return (
    <div>
    {/* <Header/> */}
        <Navbar />
        <div style={{height:"50px"}}></div>
        <Routes>
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route exact path="/empty" element={<Empty/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/"  element ={<Frontpage/>}/>
          <Route exact path="/product" element={<Product/>}/>
          <Route exact path="/heart" element={<Heart/>}/>
          <Route exact path="/payment" element={<CreditCard/>}/>
          <Route exact path="/thankyou" element={<Thankyou/>}/>
          
    {
      !current ? (
        <Route exact path="/" element={<Products/>} />
      ):(
<Route exact path="/product/:id" element={<SingleItem/>} />
      )
    }

          
        </Routes>
        <div style={{ height:"250px",marginTop:"150px"}}><h1></h1></div>
        <Footer/>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      current: state.shop.current,
    };
  };

export default connect(mapStateToProps)(Cartroutes)