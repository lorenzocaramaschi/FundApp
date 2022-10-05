import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";
import './item-detail-container.css';
import { getFirestore, getDocs, collection, where, query } from "firebase/firestore"


const ItemDetailContainer = () => {

    const id = useParams();
    const [product, setProduct] = useState()

    const obtenerProducto = async () => {
        const db = getFirestore()
        const querySnapshot = await collection(db, 'items')

        if (id) {
            const queryFilter = query(
                querySnapshot,
                where("title", "==", id.titulo)
            )
            getDocs(queryFilter).then(res => {
                const data = res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                console.log(...data)
                const dataFilter = data.filter((doc) => doc.title === id.titulo)
                console.log(id.titulo)
                setProduct(...data)
                
            })
                .catch((err) => {
                    console.log(err)
                })

        }        

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