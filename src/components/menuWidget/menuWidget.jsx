import { Link } from "react-router-dom";
import CartWidget from '../cartWidget/cartWidget'

const MenuWidget = () => {


    return (
        <>
            <nav className="navbar navbar-expand-xl ">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand">FundApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarWithDropdown" aria-controls="navbarWithDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse show justify-content-end" id="navbarWithDropdown">
                        <ul className="navbar-nav alinear-items">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/nosotros"} className="nav-link active">Nosotros</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fundas
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to={"/categoria/dibujadas"} className="dropdown-item">Dibujadas</Link></li>
                                    <li><Link to={"/categoria/solidas"} className="dropdown-item">Solidas</Link></li>
                                    <li><Link to={"/categoria/tematicas"} className="dropdown-item">Tematicas</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to={"/contactos"} className="nav-link active">Contactos</Link>
                            </li>
                            <CartWidget/>
                        </ul>
                    </div>
                </div>
            </nav>           
        </>
    )
}

export default MenuWidget;