import { useRef } from "react";

const MenuWidget = () => {
    const cerrarMenu = () => {
        cerrarOpciones.current.classList.remove("desactivar-opciones")
    }
    const abrirMenu = () => {
        cerrarOpciones.current.classList.add("desactivar-opciones")
    }

    const cerrarOpciones = useRef(null)

    return (
        <>
            <i onClick={abrirMenu} className='bx bx-md bx-menu' ></i>
            <div className='opciones' ref={cerrarOpciones}>
                <i onClick={cerrarMenu} className='bx bx-x cerrar-opciones'></i>
                <h3>FundApp</h3>
                <ul>
                    <a href='#inicio'><li>Inicio</li></a>
                    <a href='#nosotros'><li>Nosotros</li></a>
                    <a href='#nosotros' onClick={() => { console.log("Acá va a ir un dropdown con algunas categorías!") }}><li>Fundas</li></a>
                    <a href='#contacto'><li>Contactos</li></a>
                </ul>
            </div>
        </>
    )
}

export default MenuWidget;