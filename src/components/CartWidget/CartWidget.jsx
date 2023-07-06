import "./CartWidget.css";
import cartIcon from "./cartIcon.svg"


function CartWidget () {
    return (
        <div>
            <button><img className="cartWidget" src={cartIcon} alt="Carrito de compras"/></button>
            <span className="productsQuantity">0</span>
        </div>
    )
}

export default CartWidget;
