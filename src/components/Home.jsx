import { usePizzaContext } from "../context/PizzaContext";
import Cards from "./Cards";

export const Home = () => {
  const { dataPizzas } = usePizzaContext();

  return (
    <div className="cont-home">
      <div className="div1-cont-home">
        <p>
          <h2>¡Pizzería Mamma Mia!</h2>
        </p>
        <h4>¡Tenemos las mejores piazzas que podras encontrar!</h4>
      </div>
      <div className="div2-cont-home">
        {dataPizzas.map((dataPizza) => (
          <Cards dataPizza={dataPizza} />
        ))}
      </div>
    </div>
  );
};
