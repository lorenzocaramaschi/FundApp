import NavBar from "./components/navBar/NavBar";
import "../src/style.css";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./components/nosotros/nosotros";
import Contactos from "./components/contactos/contactos";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import CartProvider from "./context/cartProvider";
import Footer from "./components/footer/footer";
import Cart from "./components/cart/cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="contenedor">
          <NavBar></NavBar>
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/FundApp-Caramaschi/"
                element={<ItemListContainer />}
              />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contactos" element={<Contactos />} />
              <Route path="/carrito" element={<Cart />} />
              <Route
                path="/:categoria/:titulo"
                element={<ItemDetailContainer />}
              />
              <Route
                path="/categoria/:category"
                element={<ItemListContainer />}
              />
            </Routes>
          </main>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
