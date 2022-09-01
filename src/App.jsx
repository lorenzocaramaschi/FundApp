import NavBar from "./components/navBar/NavBar"
import '../src/style.css'
import ItemListContainer from "./components/itemListContainer/itemListContainer";

function App() {
  
  return (    
    <div>
      <NavBar></NavBar> 
      <ItemListContainer greeting={"El contenido no esta disponible en este momento."}/>
    </div>
        
  );

}

export default App;
