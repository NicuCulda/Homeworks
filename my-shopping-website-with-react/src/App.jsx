
import React from 'react'
import './App.css'
import { useState } from 'react'
import Layout from './Components/Layout/Layout'
import ShopPage from './Pages/ShopPage/ShopPage'
import CartPage from './Pages/CartPage/CartPage'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import {useCart} from 'react-use-cart'


function App() {
  const { totalItems } = useCart();
  const cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity
    } = useCart();
    if(isEmpty) return <h1>Your Cart Is Empty</h1>

     return (
        <section>
            <div>
                <h5>Cart({totalUniqueItems}) totalItems: ({totalItems})</h5>
            </div>
        </section>
     )
 }

 
  
  return (
    <BrowserRouter>
      <Layout itemsCount = {cart}>
        <Routes>
          <Route path = "/shop" element = {<ShopPage />} />
          <Route path = "/cart" element = {<CartPage />} />
          {/* <Route path="*" element = {<div>Not Found!</div>} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
