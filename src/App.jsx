import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Content from './Components/Content/Index'
import { AppProvider } from './context/appContext'
import { CartProvider } from './context/CartContext'

export default props => {
    return (
        <AppProvider>
            <CartProvider>
                <div className="App" >
                    <Content />
                </div>
            </CartProvider>
        </AppProvider>
    )
}