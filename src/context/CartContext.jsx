import React, { createContext, useState } from "react";

const CartContext = createContext(undefined);
const CartDispatchContext = createContext(undefined);

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const dispatcher = (value, key) => {
      switch(key) {
        case 'remove':
          setCart(cart.filter(cartItem => cartItem !== value));
          break;
        default:
          setCart([...cart, value])
          break;
      }
    };

  return (
     <CartContext.Provider value={cart}>
       <CartDispatchContext.Provider value={dispatcher} >
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext, CartDispatchContext };