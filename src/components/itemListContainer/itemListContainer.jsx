import './itemListContainer.css'
import 'animate.css'
import { data } from '../mockData'
import { useEffect, useState } from 'react'
import ItemList from '../itemList/itemList'
import { NavLink, useParams } from 'react-router-dom'



const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const categoryName = useParams();

    const obtenerProductos = async () => {

        await new Promise((resolve, reject) => {
            setLoading(true)
            setTimeout(() => {

                console.log(categoryName)

                if (Object.keys(categoryName).length===0) {
                    resolve(data)
                }
                else {
                    const dataFilter = data.filter(product => product.categoria === categoryName.category)
                    resolve(dataFilter)
                }

            }, 2000)

        })

            .then((response) => {
                setListaProductos(response)
                setLoading(false)
            })
    }

    useEffect(() => {
        obtenerProductos()
    }, [categoryName])




    return (
        <NavLink to={'/'} style={{ textDecoration: 'none', color: '#42506b' }}>
            {loading ? (<div className="lds-ring"><div></div><div></div><div></div><div></div></div>) : <ItemList lista={listaProductos} />}
        </NavLink>

    )
}

export default ItemListContainer;