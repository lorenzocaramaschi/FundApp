import { useState } from "react";
import { Link } from "react-router-dom";
import Comprar from "../botonComprar/botonComprar";
import ContadorItems from "../itemCount/itemCount";
import './item-detail.css'

const ItemDetail = ({ product }) => {

    const [itemsCantidad, setItemsCantidad] = useState(0)
    const [stockActual, setStockActual] = useState(product.stock)

    return (
        <div className="contenedor-detalles">
            <div className="card">
                <div className="row g-0">
                    <div className="col-5 col-sm-4">
                        <img src={product.imagen} className="img-fluid w-100" alt={product.titulo} />
                    </div>
                    <div className="col-7 col-sm-8">
                        <div className="card-body">
                            <h1 className="card-title animate__animated animate__fadeInUp">{product.titulo}</h1>
                            <p className="card-text">{product.descripcion}</p>
                            <p className="card-text"><small className="text-muted">{product.categorias}</small></p>
                            <div className="info-detalles">
                                <ContadorItems stock={product.stock} setItemsCantidad={setItemsCantidad} setStockActual={setStockActual} stockActual = {stockActual} itemsCantidad={itemsCantidad} />                                
                                <Link to={"/carrito"}><Comprar /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;