import './item-list.css'
import Item from "../item/item"
import { Link } from 'react-router-dom'

const ItemList = ({ lista }) => {
    console.log(lista)

    return (
        <div className='contenedorProductos'>
            {
                lista.map((producto) => (
                    <Link key={producto.id} style={{textDecoration: "none", color: "#42506b"}}  to={"/"+producto.categoria+"/"+producto.titulo}>
                        <Item  titulo={producto.titulo} precio={producto.precio} imagen={producto.imagen} categoria={producto.categoria} />
                    </Link>
                ))
            }
        </div>
    )

}

export default ItemList