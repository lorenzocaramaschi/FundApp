import { useContext } from "react"
import { CartContext } from "../../context/cartProvider"

const Cart = () => {

  const { clear, RemoveItem, cart } = useContext(CartContext)
  console.log(cart)

  

  return (
    <div>
      <h1>Tu carrito:</h1>
      <div>      
      </div>
      <button onClick={clear}>Vaciar Carrito</button>      
      <button onClick={RemoveItem}>Remover Item</button>      
    </div>
  )
}

export default Cart