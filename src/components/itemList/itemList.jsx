import './item-list.css'
import Item from "../item/item"
import { Link } from 'react-router-dom'

const ItemList = ({ lista }) => {

    return (
        <div className='contenedorProductos'>
            {
                lista.map((producto) => (
                    <Link key={producto.id} style={{ textDecoration: "none", color: "#42506b" }} to={"/" + producto.categoryId + "/" + producto.title}>
                        <Item titulo={producto.title} precio={producto.price} imagen={producto.image} categoria={producto.categoryId} />
                    </Link>
                ))
            }
        </div>
    )

}

export default ItemList