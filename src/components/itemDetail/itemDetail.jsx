import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../context/cartProvider";
import Comprar from "../botonComprar/botonComprar";
import ContadorItems from "../itemCount/itemCount";
import './item-detail.css'


const ItemDetail = ({ product }) => {

    const [itemsCantidad, setItemsCantidad] = useState(0)
    const [stockActual, setStockActual] = useState(product.stock)
    const { AddToCart } = useContext(CartContext)

    const onAdd = (product) => {
        AddToCart(product, itemsCantidad)
    }

    return (
        <div className="contenedor-detalles">
            <div className="card">
                <div className="row g-0">
                    <div className="col-5 col-sm-4">
                        <img src={product.image} className="img-fluid w-100" alt={product.title} />
                    </div>
                    <div className="col-7 col-sm-8">
                        <div className="card-body">
                            <h1 className="card-title animate__animated animate__fadeInUp">{product.title}</h1>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text"><small className="text-muted">{product.categoryId}</small></p>
                            <div className="info-detalles">
                                <ContadorItems stock={product.stock} setItemsCantidad={setItemsCantidad} setStockActual={setStockActual} stockActual={stockActual} itemsCantidad={itemsCantidad} />
                                <div onClick={() => itemsCantidad === 0 ? Swal.fire({
                title: 'Selecciona una cantidad!',
                text: 'No puedes comprar 0 de este item',
                icon: 'error',
                confirmButtonText: 'Ok'
            }) : onAdd(product)}>
                                    <Comprar />
                                </div>
                                <Link to={"/carrito"}>
                                    <button>Terminar Compra</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;