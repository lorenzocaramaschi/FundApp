import './itemListContainer.css'
import 'animate.css'
import { data } from '../mockData'
import { useEffect, useState } from 'react'
import ItemList from '../itemList/itemList'
import { NavLink } from 'react-router-dom'


const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState([])  
    const [loading, setLoading] = useState(false) 

    useEffect(() => {               
        obtenerProductos()       
    }, [])

    const obtenerProductos = async () => {
        await new Promise((resolve, reject) => {
            setLoading(true)
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })

            .then((response) => {
                setListaProductos(response)
                setLoading(false)
            })
    }


    return (
        <NavLink to={'/'} style={{ textDecoration: 'none', color: '#42506b' }}>
            {loading ? (<div className="lds-ring"><div></div><div></div><div></div><div></div></div>) : <ItemList lista={listaProductos} />}
        </NavLink>

    )
}

export default ItemListContainer;