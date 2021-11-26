import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext(undefined);
const CartDispatchContext = createContext(undefined);

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const dispatcher = (value) => {
        setCart([...cart, value]);
    };

    useEffect(() => {
        console.log(cart);
    }, [cart])

  return (
     <CartContext.Provider value={cart}>
       <CartDispatchContext.Provider value={dispatcher} >
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext, CartDispatchContext };