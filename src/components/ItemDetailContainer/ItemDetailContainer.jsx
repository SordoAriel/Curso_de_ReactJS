import {useState, useEffect, useContext} from "react"
import { getProductData } from "../../services/firebase";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import {useParams} from "react-router-dom"
import { cartContext } from "../../context/cartContext";
import { DotPulse } from '@uiball/loaders'
import Swal from 'sweetalert2'

function ItemDetailContainer(){

    const { addToCart } = useContext(cartContext)

    const [product, setProduct] = useState ({})

    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams()

    async function requestProduct() {
  const response = await getProductData(id);
  if (response) {
    setProduct(response);
    setIsLoading(false);
  } else {
    setIsLoading(false);
  }
}

useEffect(() => {
  setIsLoading(true);
  requestProduct();
}, []);

    function handleAddToCart (quantity){
        Swal.fire(`Producto agregado, cantidad: ${quantity}`)
        addToCart(product, quantity)
    }

    if (isLoading) {
        return <div style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <DotPulse size={40} speed={1.3} color="white"/>
                </div>;
      } else {
        return ( <ItemDetail {...product} handleAddToCart={handleAddToCart} /> );
      }
}

export default ItemDetailContainer;
