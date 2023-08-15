import "./ItemDetail.css"
import ItemCount from './ItemCount/ItemCount'


const ItemDetail = ({name, description, price, stock, img, handleAddToCart}) => {
    return (
    <div className="itemDetailCard">
        <img className="itemDetailImg" src={img} alt="imagen de producto"/>
        <h2>{name}</h2>
        <small>{description}</small>
        <ItemCount stock={stock} handleAddToCart={handleAddToCart}/>
        <h4>$ {price}</h4>
            
        
    </div>
    )
}

export default ItemDetail;
