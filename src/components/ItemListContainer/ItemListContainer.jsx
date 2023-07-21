import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import getData, {getCategoryData} from "../../services/asyncMock";
import Item from "../Items/Item"
import { useParams } from "react-router-dom";

function ItemListContainer (props) {
    
    const [products, setProducts] = useState ([])

    const {categoryId} = useParams();

        async function requestProducts () {
        let response = categoryId ? await getCategoryData(categoryId) : await getData();
        setProducts(response)
    }
    
    useEffect(
        () => {
            requestProducts();
        }, [categoryId]        
    )

    return (
        <>
            <h2 className="greetings"> {props.greetings}</h2>
            <div className="itemListContainer">
                {products.map((item) => (
                <Item key={item.id} {...item} />))}
            </div>
        </>
        
    )
}

export default ItemListContainer;
