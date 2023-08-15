import {useState, useEffect, useContext} from "react"
import { getProductData } from "../../services/asyncMock";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import {useParams} from "react-router-dom"
import { cartContext } from "../../context/cartContext";
import { DotPulse } from '@uiball/loaders'

function ItemDetailContainer(){

    const { addToCart } = useContext(cartContext)

    const [product, setProduct] = useState ({})

    async function requestProduct () {
        const response = await getProductData(id);
        setProduct(response)
        setIsLoading(false)
    }
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams()
    
    useEffect(
        () => {
            setIsLoading(true)
            requestProduct();
        },[]       
    )
    
    function handleAddToCart (quantity){
        alert(`Producto agregado, cantidad: ${quantity}`)
        addToCart(product, quantity)
    }

    if (isLoading) {
        return <DotPulse size={40} speed={1.3} color="white"/>;
      } else {
        return ( <ItemDetail {...product} handleAddToCart={handleAddToCart} /> );
      }
}

export default ItemDetailContainer;
