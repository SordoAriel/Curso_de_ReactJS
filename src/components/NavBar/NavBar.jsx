import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import logo from "./logo.png";
import {Link} from "react-router-dom"

function NavBar () {
    return (
      <nav className="navBarStyles" >
        <Link to="/"><img className="logo" src={logo} alt="Logo de Ferretería Ferros" /></Link>
        <ul className="list">
          <li className="listItems">
            <Link className="link" to="/categoría/Herramientas">Herramientas</Link>
          </li>
          <li className="listItems">
            <Link className="link" to="/categoría/Electricidad">Electricidad</Link>
          </li>
          <li className="listItems">
            <Link className="link" to="/categoría/Sanitarios">Sanitarios</Link>
          </li>
          <li className="listItems">
            <Link className="link" to="/categoría/Seguridad">Seguridad</Link>
          </li>
        </ul>
        <Link to ="/carrito"><CartWidget /></Link>
      </nav>
    )
  }

  export default NavBar;

