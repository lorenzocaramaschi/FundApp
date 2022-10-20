import { useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      Swal.fire({
        title: "Oops!",
        text: "Ese item ya está en tu carrito!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      setCart([...cart, { ...item, cantidad }]);
      localStorage.setItem("carro", JSON.stringify(cart));
      console.log(cart);
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const clear = () => {
    setCart([]);
    console.log(cart);
  };

  const RemoveItem = (product) => {
    let nuevoArreglo = [];
    cart.forEach((producto) => {
      if (producto.id !== product) {
        nuevoArreglo.push(producto);
      }
    });
    setCart(nuevoArreglo);
  };

  return (
    <CartContext.Provider value={{ cart, AddToCart, clear, RemoveItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
