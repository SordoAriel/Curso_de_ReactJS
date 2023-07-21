import "./ItemDetail.css"


const ItemDetail = ({name, description, price, img}) => {
    return (
    <div className="itemDetailCard">
        <img className="itemDetailImg" src={img} alt="imagen de producto"/>
        <h2>{name}</h2>
        <small>{description}</small>
        <div>
            
            <h4>$ {price}</h4>
        </div>
    </div>
    )
}

export default ItemDetail;
