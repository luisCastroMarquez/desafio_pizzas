import React from "react";
import Button from "react-bootstrap/Button";
import { usePizzaContext } from "../context/PizzaContext";

const Cart = () => {
  const { dataCart } = usePizzaContext();

  return (
    <div className="const-carrito">
      <div className="div1-carrito">
        <p>Detalles del pedido: </p>
        {dataCart.map((pizza) => (
          <div className="div2-carrito">
            <img src="" alt="" />
            <p>{pizza.name}</p>
            {`$${pizza.price}`}
            <Button variant="danger">-</Button>
            <p>6</p>
            <Button variant="souccer">+</Button>
          </div>
        ))}

        <h3>Total: $134690 </h3>
        <Button variant="primary">Ir a Pagar</Button>
      </div>
    </div>
  );
};

export default Cart;
