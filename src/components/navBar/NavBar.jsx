import { Link } from 'react-router-dom'
import CartWidget from '../cartWidget/cartWidget'
import MenuWidget from '../menuWidget/menuWidget'


const NavBar = () => {


    return (
        <header id='header'>
            <MenuWidget />
            <Link to={"/"}>
                <img width={"50"} height={"50"} src={require('../../Logo FundApp.png')} alt="Logo FundApp" />
            </Link>
            <CartWidget />
        </header>
    )


}

export default NavBar;