import './Layout.css'
import { Link } from "react-router-dom";
import React from 'react';
import {CartProvider} from 'react-use-cart'

function Layout(props) {
    return (
        <div className='layout'>
            <header >
                <h1>My Shop App</h1>
                <nav>
                    <ul>
                        <li><Link to = '/shop'>Shop</Link></li>
                        <li><Link to= '/cart'>Cart({props.itemCount} items)</Link></li>
                    </ul>
                </nav>
            </header>
            <main id='app-main-content'>
                {props.children}
            </main>
        </div>
    )
}

export default Layout