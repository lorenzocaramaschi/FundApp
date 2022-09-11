import NavBar from "./components/navBar/NavBar"
import '../src/style.css'
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./components/nosotros/nosotros";
import Contactos from "./components/contactos/contactos";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/:categoria/:titulo" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );

}

export default App;
