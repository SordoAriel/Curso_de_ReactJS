import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import logo from "./logo.png";
import cartIcon from "./searchIcon.svg"

function NavBar () {
    return (
      <nav className="navBarStyles" >
        <img className="logo" src={logo} alt="Logo de Ferretería Ferros" />
        <form className="form">
          <input className="searchInput" type="name" placeholder="Buscar..."/>
          <button className="searchButton" type="submit"><img className="searchButtonIcon" src={cartIcon} alt="Búsqueda"/></button>
        </form>
        <ul className="list">
          <li className="listItems">
            <a class="link" href="./app.js">Nosotros</a>
          </li>
          <li className="listItems">
            <a class="link" href="./app.js">Ofertas</a>
          </li>
          <li className="listItems">
            <a class="link" href="./app.js">Electricidad</a>
          </li>
          <li className="listItems">
            <a class="link" href="./app.js">Sanitarios</a>
          </li>
          <li className="listItems">
            <a class="link" href="./app.js">Otros</a>
          </li>
        </ul>
        <CartWidget />
      </nav>
    )
  }

  export default NavBar;
