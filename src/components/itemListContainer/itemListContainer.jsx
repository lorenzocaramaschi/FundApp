import './itemListContainer.css'
import 'animate.css'
import { data } from '../mockData'
import { useEffect, useState } from 'react'
import ItemList from '../itemList/itemList'





const ItemListContainer = ({ greeting }) => {

    const [listaProductos, setListaProductos] = useState([])

    useEffect(() => {
        obtenerProductos.then((response)=>{
            setListaProductos(response)
        })
    }, [])

    const obtenerProductos =
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })


    return (
        <ItemList lista={listaProductos} />
    )
}

export default ItemListContainer;