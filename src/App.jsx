import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Content from './Components/Content'
import { AppProvider } from './context/appContext'

export default props => {
    return ( 
        <AppProvider>
            <div className = "App" >
                <Content />
            </div>
        </AppProvider>
    )
}