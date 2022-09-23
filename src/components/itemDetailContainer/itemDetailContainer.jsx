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
        const db = getFirestore()
        const querySnapshot = await collection(db, 'items')
        getDocs(querySnapshot).then(res => {
            const data = res.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            const dataFilter = data.filter((doc) => doc.title === id.titulo)
            setProduct(...dataFilter)
        })
            .catch((err) => {
                console.log(err)
                console.log("hey");
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