import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const AddToCart = (item,quantity) => {
        setCart([...cart] , {...item, quantity})
    }

    return (
        <CartContext.Provider value={{ cart, AddToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;