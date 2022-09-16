import { useRef } from "react";
import { Link } from "react-router-dom";
import './menu-widget.css'

const MenuWidget = () => {
    const cerrarMenu = () => {
        cerrarOpciones.current.classList.remove("desactivar-opciones")
    }
    const abrirMenu = () => {
        cerrarOpciones.current.classList.add("desactivar-opciones")
    }

    const cerrarOpciones = useRef(null)

    const abrirOpcion = useRef(null)



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
                    <div ref={abrirOpcion}>
                        <Link to={"/categoria/dibujadas"}><div className="categorias">Dibujadas</div></Link>
                        <Link to={"/categoria/solidas"}><div className="categorias">Solidas</div></Link>
                        <Link to={"/categoria/tematicas"}><div className="categorias">Tematicas</div></Link>
                    </div>
                    <Link to={"/contactos"}><li>Contactos</li></Link>
                </ul>
            </div>
        </>
    )
}

export default MenuWidget;