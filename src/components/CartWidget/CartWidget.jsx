import "./CartWidget.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


function CartWidget () {
    const {getTotalItemsInCart} = useContext(cartContext)
    const isInCart = getTotalItemsInCart()
   
    return (
        <Link to="/carrito">
            <div>
                {isInCart !== 0 && (
                 <div>
                    <button><FontAwesomeIcon icon= {faCartShopping} className="cartIcon"/> </button>
                    <span className="productsQuantity">{getTotalItemsInCart()}</span>
                </div>
                )}
            </div>
        </Link>
    )}


export default CartWidget;
