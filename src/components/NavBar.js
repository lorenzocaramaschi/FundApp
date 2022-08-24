import React, { useRef } from 'react'

const NavBar = () => {

    const cerrarMenu = () => {
        cerrarOpciones.current.classList.add("desactivar-opciones")
    }
    const cerrarCarrito = () => {
        cerrarCarritox.current.classList.add("desactivar-opciones")
    }
    const abrirCarrito = () => {
        cerrarCarritox.current.classList.remove("desactivar-opciones")
    }
    const abrirMenu = () => {
        cerrarOpciones.current.classList.remove("desactivar-opciones")
    }

    const cerrarOpciones = useRef(null)
    const cerrarCarritox = useRef(null)


    return (
        <header id='header'>
            <i onClick={abrirMenu} className='bx bx-md bx-menu' ></i>
            <a href='#header'><img width={"50"} height={"50"} src={require('../Logo FundApp.png')} alt="Logo FundApp" /></a>
            <i onClick={abrirCarrito} className='bx bx-md bxs-shopping-bag' ></i>
            <div className='carrito' ref={cerrarCarritox}>
                <i onClick={cerrarCarrito} className='bx bx-x cerrar-carrito'></i>
                <h3>Tu carrito</h3>
                <span>Total: $0</span>
                <div className='contenedor-botones'>
                    <button onClick={()=>{console.log("Vaciaste el carrito!")}}>Vaciar</button>
                    <button onClick={()=>{console.log("Compraste los productos!")}}>Comprar</button>
                </div>

            </div>
            <div className='opciones' ref={cerrarOpciones}>
                <i onClick={cerrarMenu} className='bx bx-x cerrar-opciones'></i>
                <h3>FundApp</h3>
                <ul>
                    <a href='#inicio'><li>Inicio</li></a>
                    <a href='#nosotros'><li>Nosotros</li></a>
                    <a href='#nosotros' onClick={()=>{console.log("Acá va a ir un dropdown con algunas categorías!")}}><li>Fundas</li></a>
                    <a href='#contacto'><li>Contactos</li></a>
                </ul>
            </div>
        </header>
    )


}

export default NavBar;