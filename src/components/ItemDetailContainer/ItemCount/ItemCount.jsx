import "./ItemCount.css"
import { useState } from "react"


function ItemCount ({stock, handleAddToCart}) {
    const [quantity, setQuantity] = useState (1);

    const add = () => {
        if(quantity <= stock){ 
            setQuantity(quantity+1)
        }    
    }

    const rest = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }
    
    return (
        <div>
            <div className="counter">
                <button className="counterBtn" onClick={rest}>-</button>
                <span>{quantity}</span>
                <button className="counterBtn" onClick={add}>+</button>
            </div>
            <button className="counterBtn" onClick={() => handleAddToCart(quantity)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;
