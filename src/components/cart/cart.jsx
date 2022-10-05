import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartProvider"
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore'
import moment from "moment/moment"
import Swal from "sweetalert2"

const Cart = () => {

  const { clear, RemoveItem, cart } = useContext(CartContext)
  
  const db = getFirestore()

  const createOrder = () => { 
    const order = {
      buyer: {
        name: "Lorenzo",
        phone: 11111,
        email: "aaaa@test.com"
      },
      items: cart,
      total: cart.reduce((acc, item) =>
        acc = acc + (item.price * item.cantidad)
        , 0),
      date: moment().format()
    }


    const query = collection(db, 'orders')
    addDoc(query, order)
      .then(({ id }) => {
        console.log(id)
        Swal.fire(
          {
            title: 'Felicitaciones por su compra!',
            icon: 'success',
            confirmButtonText: '¡Gracias!'
          }
        )
      })
      .catch((err) => Swal.fire(
        {
          title: '¡Hubo un error en tu compra!',
          text: 'Tu orden no puede ser procesada en este momento',
          icon: 'error',
          confirmButtonText: 'Ok'
        }
      ))
  }

  /* const updateOrder = () => {
    const idOrder = "1D9sEWCpets7c4MG4Uel"
    const order = {
      buyer: {
        name: "Lorenzo",
        phone: 11111,
        email: "aaaa@test.com"
      },
      items: cart.pop(),
      total: cart.reduce((acc, item) =>
        acc = acc + (item.price * item.cantidad)
        , 0),
      date: moment().format()
    }

    
    const queryUpdate = doc(db, 'orders', idOrder)
    updateDoc(queryUpdate, order)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    }) 

  } */



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
          <button onClick={createOrder}>Crear orden</button>
          {/* <button onClick={updateOrder}>Actualizar orden</button> */}
        </div>

      )}

      <button onClick={clear}>Vaciar Carrito</button>

      <div>Total: {cart.reduce((acc, item) =>
        acc = acc + (item.price * item.cantidad)
        , 0)}</div>

    </div>
  )
}

export default Cart