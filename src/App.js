import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartContextProvider } from './context/cartContext';
import CartView from "./components/CartView/CartView"

function App() {
  return (
    <div className="appStyles">
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element= {<ItemListContainer/>}/>
            <Route path="/categoría/:categoryId" element= {<ItemListContainer/>}/>
            <Route path="/producto/:id" element= {<ItemDetailContainer/>}/>
            <Route path="/carrito" element= {<CartView/>}/>
            <Route path="*" element= {<h1>La página buscada no se ha podido encontrar. Por favor, revise la url e intente nuevamente</h1>}/>
          </Routes>
        </BrowserRouter>  
      </CartContextProvider> 
    </div> 
  );
}

export default App;
