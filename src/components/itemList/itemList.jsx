import './item-list.css'
import Item from "../item/item"

const ItemList = ({ lista }) => {
    console.log(lista)

    return (
        <div className='contenedorProductos'>
            {
                lista.map((producto) => (
                    <Item key={producto.id} titulo={producto.titulo} precio={producto.precio} imagen={producto.imagen} categoria={producto.categoria} />
                ))
            }
        </div>
    )

}

export default ItemList