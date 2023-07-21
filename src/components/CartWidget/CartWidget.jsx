import "./CartWidget.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"


function CartWidget () {
    return (
        <div>
            <button><FontAwesomeIcon icon= {faCartShopping} className="cartIcon"/> </button>
            <span className="productsQuantity">0</span>
        </div>
    )
}

export default CartWidget;
