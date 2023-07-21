import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import logo from "./logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
function NavBar () {
    return (
      <nav className="navBarStyles" >
        <Link to="/"><img className="logo" src={logo} alt="Logo de Ferretería Ferros" /></Link>
        <form className="form">
          <input className="searchInput" type="name" placeholder="Buscar..."/>
          <button className="searchButton" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/></button>
        </form>
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
        <CartWidget />
      </nav>
    )
  }

  export default NavBar;

