import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <ul className="indice-footer">
                Indice
                <Link to={"/"}><li>Inicio</li></Link>
                <Link to={"/nosotros"}><li>Nosotros</li></Link>
                <Link to={"/contactos"}><li>Contacto</li></Link>
            </ul>            
            <div>
            Redes
            <ul className="indice-redes">
                
                <li><i className='bx bxl-instagram'></i></li>
                <li><i className='bx bxl-github' ></i></li>
                <li><i className='bx bxl-twitter' ></i></li>
            </ul>
            </div>            
        </footer>
    )
}

export default Footer;