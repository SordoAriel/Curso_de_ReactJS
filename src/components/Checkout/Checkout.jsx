import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import "./Checkout.css"

function Checkout() {
  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const navigate = useNavigate();
  const { cart, getTotalPriceInCart, clearCart } = useContext(cartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      items: cart,
      buyer: buyer,
      date: new Date(),
      total: getTotalPriceInCart(),
    };

    try {
      const idOrder = await createOrder(orderData);
      Swal.fire(
        '¡Gracias por tu compra!',
        `Tu numero de orden es ${idOrder}`,
        'success'
      );
      navigate(`/`);
      clearCart();
    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
    }
  }

  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
  }

  function resetForm(e) {
    e.preventDefault();
    setBuyer({
      firstname: "",
      lastname: "",
      email: "",
    });
  }

  return (
    <form className="formStyle">
      <h2>Completa tus datos para finalizar la compra</h2>

      <div className="inputFormStyle">
        <label htmlFor="lastname" style={{ width: "200px", marginRight: 4 }}>
          Nombre
        </label>
        <input
          value={buyer.firstname}
          name="firstname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div className="inputFormStyle">
        <label htmlFor="lastname" style={{ width: "200px", marginRight: 4 }}>
          Apellido
        </label>
        <input
          value={buyer.lastname}
          name="lastname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div className="inputFormStyle">
        <label style={{ width: "200px", marginRight: 4 }}>E-mail</label>
        <input
          value={buyer.email}
          name="email"
          type="mail"
          onChange={onInputChange}
        />
      </div>
      <div className="btnContainer"> 
      <button className="cartBtn"
        disabled={!(buyer.firstname !== "" && buyer.lastname !== "" && buyer.email !== "")} onClick={handleCheckout}>
        Confirmar Compra
      </button>
      <button className="cartBtn" onClick={resetForm}>Cancelar</button>
      </div> 
    </form>
  );
}

export default Checkout;