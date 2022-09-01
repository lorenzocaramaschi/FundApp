import CartWidget from '../cartWidget/cartWidget'
import MenuWidget from '../menuWidget/menuWidget'

const NavBar = () => {


    return (
        <header id='header'>
            <MenuWidget/>
            <a href='#header'><img width={"50"} height={"50"} src={require('../../Logo FundApp.png')} alt="Logo FundApp" /></a>
            <CartWidget/>            
        </header>
    )


}

export default NavBar;