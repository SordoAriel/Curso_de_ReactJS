import {Link} from "react-router-dom";
import "./Item.css";

function Item(props) {
    const { id, name, description, stock, price, img } = props;
  
    return (
      <div className="itemCard">
        <img className="itemCardImg" src={img} alt="imagen de producto"/>
        <h2>{name}</h2>
        <small>{description}</small>
        <h4>$ {price}</h4>
        <Link to={`/producto/${id}`}><button className="seeProductBtn">Ver producto</button></Link>

      </div>
    );
  }

  export default Item;
  