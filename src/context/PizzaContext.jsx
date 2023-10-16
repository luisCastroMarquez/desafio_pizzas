import { createContext, useContext, useState } from "react";
import pizzas from "../assets/data/pizzas.json";

const PizzaContext = createContext();

export const usePizzaContext = () => {
  return useContext(PizzaContext);
};

export const PizzaProvider = ({ children }) => {
  const [dataPizzas, setDataPizzas] = useState(pizzas);
  const [dataCart, setDataCart] = useState([]);

  const addToCart = (pizza) => {
    setDataCart((prevCart) => [...prevCart, pizza]);
  };

  const removeFromCart = (pizza) => {
    setDataCart((prevCart) => prevCart.filter((item) => item.id !== pizza.id));
  };

  return (
    <PizzaContext.Provider
      value={{ dataPizzas, dataCart, addToCart, removeFromCart }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContext;
