import { useState } from "react";
import { createContext } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])



    const AddToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            Swal.fire({
                title: 'Oops!',
                text: 'Ese item ya está en tu carrito!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
        else {
            setCart([...cart, { ...item, cantidad }])
            localStorage.setItem("carro", JSON.stringify(cart))     
            console.log(cart)       
        }

    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)

    }

    const clear = () => {
        setCart([])
    }

    const RemoveItem = (id) => {
        let itemBorrado = cart.findIndex((el) => el.id === id)
        cart.splice(itemBorrado, 1)
    }


    return (
        <CartContext.Provider value={{ cart, AddToCart, clear, RemoveItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;