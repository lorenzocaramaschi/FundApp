import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";
import { data } from "../mockData";
import './item-detail-container.css';
import { getFirestore, getDocs, collection } from "firebase/firestore"


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

    /* const obtenerProducto = async () => {
        const db = getFirestore()
        const querySnapshot = await collection(db, 'items')
        getDocs(querySnapshot).then(res => {
            const dataFilter = res.docs.filter((doc) => {
                return doc.title === id.titulo
            })
            setProduct(...dataFilter)
        })
            .catch((err) => {
                console.log(err)
                console.log("hey");
            })
    } */


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