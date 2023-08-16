import React from "react";
import "./ItemList.css";
import Item from "../Items/Item"

function ItemList(props){
    const { products } = props

    return(
    <>
        <h2 style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> Catálogo de productos:</h2>
        <div className="itemListContainer">
            {products.map((item) => (
            <Item key={item.id} {...item} />))}
        </div>
    </>
    )
}

export default ItemList;
