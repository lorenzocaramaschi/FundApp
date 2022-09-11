import { useRef } from "react";
import { Link } from "react-router-dom";

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
                    <Link to={"/"}><li>Inicio</li></Link>
                    <Link to={"/nosotros"}><li>Nosotros</li></Link>
                    <Link to={"/"}><li>Fundas</li></Link>
                    <Link to={"/contactos"}><li>Contactos</li></Link>
                </ul>
            </div>
        </>
    )
}

export default MenuWidget;