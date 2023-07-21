import {useState, useEffect} from "react"
import { getProductData } from "../../services/asyncMock";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import {useParams} from "react-router-dom"

function ItemDetailContainer(){

    const [product, setProduct] = useState ({})
        async function requestProduct () {
        const response = await getProductData(id);
        setProduct(response)
    }
    const {id} = useParams()
    
    useEffect(
        () => {
            requestProduct();
        }, []        
    )

    return ( <ItemDetail {...product} /> );
}

export default ItemDetailContainer;
