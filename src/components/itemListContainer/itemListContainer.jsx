import './itemListContainer.css'
import 'animate.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="titulo-prueba">
            <div className='animate__animated animate__fadeInUp'>{greeting}</div>
        </div>
    )
}

export default ItemListContainer;