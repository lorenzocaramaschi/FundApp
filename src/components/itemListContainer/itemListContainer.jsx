import './itemListContainer.css'
import 'animate.css'
import ContadorItems from '../itemCount/itemCount'



const ItemListContainer = ({ greeting }) => {
    return (        
            <ContadorItems stock={10}/>        
    )
}

export default ItemListContainer;