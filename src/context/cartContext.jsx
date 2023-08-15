import { useState, createContext } from "react";

const cartContext = createContext({ cart: [] });

function CartContextProvider(props) {
    const [cart, setCart] = useState([]);

    function addToCart(product, quantity) {
        const newCart = [...cart];
        const newItemInCart = {quantity, ...product}
        newCart.push(newItemInCart)
        setCart(newCart)
       /* if (isInCart(product.id)) {
          const indexUpdate = cart.findIndex((item) => item.id === product.id);
          newCart[indexUpdate].quantity += quantity;
          setCart(newCart);
        } else {
          const newItemInCart = { ...product, quantity };
          newCart.push(newItemInCart);
          setCart(newCart);
        }*/
      }

      /*function isInCart(id) {
        return cart.some((item) => item.id === id);
      }*/
    
      function getItemInCart(id) {
        return cart.find((item) => item.id === id);
      }
    
      function removeItem(id) {
        setCart(cart.filter((item) => item.id !== id));
      }
    
      function clearCart() {
        setCart([])
      }
    
      function getTotalItemsInCart() {
        let total = 0;
        cart.forEach((item) => {
          total += item.quantity;
        });
        return total;
      }
    
      function getTotalPriceInCart() {
        let total = 0;
        cart.forEach((item) => {
          total += item.quantity * item.price;
        });
        return total;
      }
    
      return (
        <cartContext.Provider
          value={{
            getItemInCart,
            cart,
            //prueba,
            addToCart,
            removeItem,
            clearCart,
            getTotalItemsInCart,
            getTotalPriceInCart,
          }}
        >
          {props.children}
        </cartContext.Provider>
      );
    }
    
export { cartContext, CartContextProvider };