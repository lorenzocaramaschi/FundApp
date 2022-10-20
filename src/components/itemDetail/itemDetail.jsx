import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../context/cartProvider";
import ContadorItems from "../itemCount/itemCount";

const ItemDetail = ({ product }) => {
  const [itemsCantidad, setItemsCantidad] = useState(0);
  const [stockActual, setStockActual] = useState(product.stock);
  const { AddToCart } = useContext(CartContext);
  console.log(product);
  const onAdd = (product) => {
    AddToCart(product, itemsCantidad);
  };

  return (
    <div className="contenedor-detalles">
      <img
        className="imagen-detalles"
        src={product.image}
        alt={product.title}
      />
      <div className="info-detalles">
        <h2 className="nombre-detalles">{product.title}</h2>
        <span className="categoria-detalles">{product.categoryId}</span>
        <p className="precio-detalles">${product.price}</p>
        <p className="descripcion">{product.description}</p>
        <div className="contador">
          <ContadorItems
            stock={product.stock}
            setItemsCantidad={setItemsCantidad}
            setStockActual={setStockActual}
            stockActual={stockActual}
            itemsCantidad={itemsCantidad}
          />
        </div>
        <div className="botones">
          <button
            onClick={() =>
              itemsCantidad === 0
                ? Swal.fire({
                    title: "Selecciona una cantidad!",
                    text: "No puedes comprar 0 de este item",
                    icon: "error",
                    confirmButtonText: "Ok",
                  })
                : onAdd(product)
            }
            className="btn-agregar"
          >
            Agregar al carrito
          </button>
          <Link className="btn-terminar" to={"/carrito"}>
            Terminar compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
