import React from "react";
import Button from "react-bootstrap/Button";
import { usePizzaContext } from "../context/PizzaContext";

const Cart = () => {
  const { dataCart, addToCart, removeFromCart } = usePizzaContext();

  const handleAddToCart = (pizza) => {
    addToCart(pizza); // Llama a la función para agregar al carrito
  };

  const handleRemoveFromCart = (pizza) => {
    removeFromCart(pizza); // Llama a la función para eliminar del carrito
  };

  // Calcular el total sumando los precios de las pizzas en el carrito
  const total = dataCart.reduce((acc, pizza) => acc + pizza.price, 0);

  return (
    <div className="const-carrito">
      <div className="div1-carrito">
        <p>Detalles del pedido: </p>
        {dataCart.map((pizza) => (
          <div key={pizza.id} className="div2-carrito">
            <img src={pizza.img} alt={pizza.name} />
            <p>{pizza.name}</p>
            {`$${pizza.price}`}
            <Button
              variant="danger"
              onClick={() => handleRemoveFromCart(pizza)}
            >
              -
            </Button>
            <p>6</p>
            <Button variant="success" onClick={() => handleAddToCart(pizza)}>
              +
            </Button>
          </div>
        ))}
        <h3>Total: ${total}</h3> {/* Mostrar el total actualizado */}
        <Button variant="primary">Ir a Pagar</Button>
      </div>
    </div>
  );
};

export default Cart;
