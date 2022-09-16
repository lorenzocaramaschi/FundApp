import NavBar from "./components/navBar/NavBar"
import '../src/style.css'
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./components/nosotros/nosotros";
import Contactos from "./components/contactos/contactos";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import CartProvider from "./context/cartProvider";
import Footer from "./components/footer/footer";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/FundApp-Caramaschi/" element={<ItemListContainer/>}/>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/:categoria/:titulo" element={<ItemDetailContainer/>} />
          <Route path= "/categoria/:category" element={<ItemListContainer/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </CartProvider>

  );

}

export default App;
