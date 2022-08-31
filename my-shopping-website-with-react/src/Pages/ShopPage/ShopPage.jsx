import './ShopPage.css';
import productList from './Products.json';
import React from 'react';
import { useEffect, useState } from 'react';


const cart = []

const ShopPage = () => {
    // const [productList, setProductList] = useState([])
    const onClickToCart = function (addedProduct) {
        console.log("Added to cart product = ", addedProduct)
        const existProduct = cart.find((cartProduct) => {
          return cartProduct.id === addedProduct.id;
        })
        if (existProduct) {
          existProduct.pices += 1;
        } else {
          addedProduct.pices = 1;
          cart.push(addedProduct);
        }
    
        console.log('Current cart = ', cart)
        
      }

    return (
        <>
            <div className = "product-list">
                {productList.map((productObject) => {
                    return (
                        <div className='product'>
                            <h1>{productObject.title}</h1>
                            <img src={productObject.image}></img>
                            <p>{productObject.price} $</p>
                            <button className='btn' onClick = { () => {
                                onClickToCart(productObject);
                            }}>Add To Cart</button>
                        </div>
                    )
                })}
            </div>  
        </>
    )
}

export default ShopPage