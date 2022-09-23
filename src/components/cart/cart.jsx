import { useContext } from "react"
import { CartContext } from "../../context/cartProvider"

const Cart = () => {

  const { clear, RemoveItem } = useContext(CartContext)

  return (
    <div>
      <h1>Tu carrito:</h1>
      <button onClick={clear}>Vaciar Carrito</button>      
      <button onClick={RemoveItem}>Remover Item</button>      
    </div>
  )
}

export default Cart