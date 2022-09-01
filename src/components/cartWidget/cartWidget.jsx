import { useRef } from "react";

const CartWidget = () => {   
    const cerrarCarrito = () => {
        cerrarCarritox.current.classList.remove("desactivar-carrito")
    }
    const abrirCarrito = () => {
        cerrarCarritox.current.classList.add("desactivar-carrito")
    }       
    const cerrarCarritox = useRef(null)
    return (
        <>
            <i onClick={abrirCarrito} className='bx bx-md bxs-shopping-bag' ></i>
            <div className='carrito' ref={cerrarCarritox}>
                <i onClick={cerrarCarrito} className='bx bx-x cerrar-carrito'></i>
                <h3>Tu carrito</h3>
                <span>Total: $0</span>
                <div className='contenedor-botones'>
                    <button onClick={() => { console.log("Vaciaste el carrito!") }}>Vaciar</button>
                    <button onClick={() => { console.log("Compraste los productos!") }}>Comprar</button>
                </div>

            </div>
        </>
    )
}

export default CartWidget;