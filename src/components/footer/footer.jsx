import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <ul className="indice-redes">                
                <li><i className='bx bxl-linkedin'></i></li>
                <li><i className='bx bxl-github' ></i></li>
                <li><i className='bx bxl-instagram'></i></li>
            </ul>
            <p>Todos los derechos reservados.</p>                        
            <p>Lorenzo Caramaschi ©</p>
        </footer>
    )
}

export default Footer;