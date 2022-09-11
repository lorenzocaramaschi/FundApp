import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";
import { data } from "../mockData";
import './item-detail-container.css';

const ItemDetailContainer = () => {

    const id = useParams();
    const [product, setProduct] = useState()

    const obtenerProducto = async () => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                const dataFilter = data.filter(product => product.titulo === id.titulo)         
                setProduct(...dataFilter)
                resolve()
            }, 2000)
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        obtenerProducto()
    }, [id])

    return (
        <div>
            {product ? (<ItemDetail product={product} />) : (<div className="lds-ring"><div></div><div></div><div></div><div></div></div>)}
        </div>
    )
}

export default ItemDetailContainer;