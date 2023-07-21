import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
      <BrowserRouter>
        <div className="appStyles">
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element= {<ItemListContainer greetings="¡Bienvenidos!"/>}/>
            <Route path="/categoría/:categoryId" element= {<ItemListContainer/>}/>
            <Route path="/producto/:id" element= {<ItemDetailContainer/>}/>
            <Route path="*" element= {<h1>La página buscada no se ha podido encontrar. Por favor, revise la url e intente nuevamente</h1>}/>
          </Routes>
        </div>  
      </BrowserRouter>  
  );
}

export default App;
