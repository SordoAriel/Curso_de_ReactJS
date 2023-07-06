import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
        <ItemListContainer greetings="¡Bienvenida/o, muchas gracias por elegirnos!"/> 
    </div>
  );
}

export default App;
