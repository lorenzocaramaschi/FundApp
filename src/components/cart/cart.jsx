import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartProvider";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import moment from "moment/moment";
import Swal from "sweetalert2";
import illustracion from "../../empty-cart.png";

const Cart = () => {
  const { clear, RemoveItem, cart } = useContext(CartContext);
  const [order, setOrder] = useState({
    buyer: {
      name: "",
      phone: 0,
      email: "",
      direccion: "",
    },
    items: cart,
    total: cart.reduce(
      (acc, item) => (acc = acc + item.price * item.cantidad),
      0
    ),
    date: moment().format(),
  });

  const db = getFirestore();

  const createOrder = () => {
    const query = collection(db, "orders");
    addDoc(query, order)
      .then(({ id }) => {
        console.log(id);
        Swal.fire({
          title: "Felicitaciones por su compra!",
          icon: "success",
          confirmButtonText: "¡Gracias!",
        });
      })
      .catch((err) =>
        Swal.fire({
          title: "¡Hubo un error en tu compra!",
          text: "Tu orden no puede ser procesada en este momento",
          icon: "error",
          confirmButtonText: "Ok",
        })
      );
  };

  const HandleInputChange = (e) => {
    console.log(e.target);
    setOrder({
      ...order,
      buyer: {
        ...order.buyer,
        [e.target.name]: e.target.value,
      },
    });
    console.log(order);
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className="contenedor-vacio">
          <img
            className="imagen-carrito-vacio"
            src={illustracion}
            alt="carrito vacío"
          />
          <p className="texto-carrito-vacio">
            ¡Tu carrito esta vacío! ¿Que estás esperando? Andá a la tienda para
            encontrar las mejores fundas del mercado
          </p>
          <Link to={"/"}>
            <button className="ir-a-tienda">
              <i class="bx bx-left-arrow-alt"></i>Ir a la tienda
            </button>
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="contenedor-card" key={item.id}>
              <img className="imagen-card" src={item.image} alt={item.title} />
              <div className="info-card">
                <h4 className="titulo-card">{item.title}</h4>
                <span className="cantidad-card">Cantidad: {item.cantidad}</span>
                <button
                  className="btn-eliminar"
                  onClick={() => RemoveItem(item.id)}
                >
                  <i class="bx bx-trash"></i>
                  <span>Eliminar</span>
                </button>
              </div>
              <span className="precio-card">${item.price}</span>
            </div>
          ))}

          <div className="total-carrito">
            Total con IVA $
            {cart.reduce(
              (acc, item) => (acc = acc + item.price * item.cantidad),
              0
            ) * 1.21}
          </div>

          <form className="formulario-orden" action="post">
            <h3>Completá con tus datos</h3>
            <div>
              <i class="bx bxs-user"></i>
              <input
                value={order.buyer.name}
                required
                placeholder="Nombre y apellido"
                type="text"
                name="name"
                id="name"
                onChange={HandleInputChange}
              />
            </div>
            <div>
              <i class="bx bx-envelope"></i>
              <input
                value={order.buyer.email}
                required
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                onChange={HandleInputChange}
              />
            </div>
            <div>
              <i class="bx bxs-phone"></i>
              <input
                value={order.buyer.phone}
                required
                placeholder="Número telefónico"
                type="number"
                name="phone"
                id="phone"
                onChange={HandleInputChange}
              />
            </div>
            <div>
              <i class="bx bxs-map"></i>
              <input
                value={order.buyer.direccion}
                required
                placeholder="Dirección"
                type="text"
                name="direccion"
                id="direccion"
                onChange={HandleInputChange}
              />
            </div>
          </form>

          <div className="botones-orden">
            <button className="vaciar-carrito" onClick={clear}>
              Vaciar Carrito
            </button>
            <button className="crear-orden" type="submit" onClick={createOrder}>
              Crear orden
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
