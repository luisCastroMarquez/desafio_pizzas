import React from "react";
import Button from "react-bootstrap/Button";
import { usePizzaContext } from "../context/PizzaContext";

const Cart = () => {
  const { dataCart, pizzaQuantities, totalCart, addToCart, removeFromCart } =
    usePizzaContext();

  const handleAddToCart = (pizza) => {
    addToCart(pizza);
  };

  const handleRemoveFromCart = (pizza) => {
    removeFromCart(pizza);
  };

  const groupPizzasByType = (cart) => {
    const groupedPizzas = {};
    cart.forEach((pizza) => {
      if (groupedPizzas[pizza.id]) {
        groupedPizzas[pizza.id].quantity += 1;
      } else {
        groupedPizzas[pizza.id] = {
          pizza,
          quantity: 1,
        };
      }
    });
    return Object.values(groupedPizzas);
  };

  // Función para formatear el valor a pesos chilenos
  const formatToChileanPesos = (value) => {
    return value.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  const groupedPizzas = groupPizzasByType(dataCart);

  return (
    <div className="const-carrito">
      <p>
        <strong>Detalles del pedido: </strong>
      </p>
      <div className="div1-carrito">
        {groupedPizzas.map((group) => (
          <div key={group.pizza.id} className="div2-carrito">
            <img
              src={group.pizza.img}
              alt=""
              style={{ width: "80px", height: "50px", alignItems: "center" }}
            />
            <p>{group.pizza.name}</p>
            <div className="div3-carrito">
              {formatToChileanPesos(
                group.pizza.price * pizzaQuantities[group.pizza.id]
              )}
              <Button
                className="btnVer"
                variant="danger"
                onClick={() => handleRemoveFromCart(group.pizza)}
              >
                -
              </Button>
              <p>{pizzaQuantities[group.pizza.id] || 0}</p>
              <Button
                className="btnCarro"
                variant="success"
                onClick={() => handleAddToCart(group.pizza)}
              >
                +
              </Button>
            </div>
          </div>
        ))}
        <div className="div4-carrito">
          <h3>Total: {formatToChileanPesos(totalCart)}</h3>
          <Button className="btnPago" variant="primary" size="lg">
            Ir a Pagar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
