import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartProvider"

const Cart = () => {

  const { clear, RemoveItem, cart } = useContext(CartContext)
  console.log(cart)



  return (
    <div>
      <h1>Tu carrito:</h1>
      {cart.length === 0 ? (<div>
        <h2>No hay productos en el carrito</h2>
       <Link to={"/"}><button>Comprar</button></Link> 
      </div>

      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <h4>{item.title}</h4>
              <img width={"125px"} height={"125px"} src={item.image} alt={item.title} />
              <p>{item.price}</p>
              <p>{item.cantidad}</p>
              <div onClick={() => RemoveItem(item.id)}>Remover Item</div>
            </div>
          ))}
        </div>
      )}
      <button onClick={clear}>Vaciar Carrito</button>

      <div>Total: {cart.reduce((acc,item)=>
        acc = acc+(item.price*item.cantidad)
      ,0)}</div>

    </div>
  )
}

export default Cart