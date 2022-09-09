import { useState } from 'react'
import './item-count.css'

const ContadorItems = ({ stock }) => {

    const [itemsCantidad, setItemsCantidad] = useState(0)
    const [stockActual, setStockActual] = useState(stock)   

    return (
        <div className='contenedor-contador-items'>
            <h3>Hay {stockActual} en stock de este producto.</h3>
            <div className='contador-items'>
                <i onClick={() => {
                    if (itemsCantidad === 10) {
                        return;
                    }
                    else {
                        setItemsCantidad(itemsCantidad + 1)
                        setStockActual(stockActual - 1)
                    }
                }} className='bx bx-plus'></i>
                <div>{itemsCantidad}</div>
                <i onClick={() => {
                    if (itemsCantidad === 0) {
                        return;
                    }
                    else {
                        setItemsCantidad(itemsCantidad - 1)
                        setStockActual(stockActual + 1)
                    }

                }} className='bx bx-minus' ></i>
            </div>
        </div>

    )

}

export default ContadorItems;