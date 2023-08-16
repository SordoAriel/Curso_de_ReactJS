import { useState, useEffect } from "react";
import { getData, getCategoryData } from "../../services/firebase";
import ItemList from "../ItemListContainer/ItemList"
import { useParams } from "react-router-dom";
import { DotPulse } from '@uiball/loaders'

function ItemListContainer (props) {
    
    const [products, setProducts] = useState ([])
    const [isLoading, setIsLoading] = useState(true);
    const {categoryId} = useParams();
    
    useEffect(
        () => {
          
            async function requestProducts () {
                let response = categoryId ? await getCategoryData(categoryId) : await getData();
                setProducts(response)
                setIsLoading(false)
            }
            requestProducts();
        }, [categoryId]        
    )

    if (isLoading) {
        return <div style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <DotPulse size={40} speed={1.3} color="white"/>
              </div>;
      } else {
        return products.length === 0 ? (
          <p>No hay productos disponibles para esa consulta.</p>
        ) : (
          <ItemList products={products} />
        );
    }
}

export default ItemListContainer;
