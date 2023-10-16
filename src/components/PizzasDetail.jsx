import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePizzaContext } from "../context/PizzaContext";

const PizzaDetail = () => {
  const { id } = useParams();
  const { dataPizzas } = usePizzaContext();
  const [dataPizza, setDataPizza] = useState({});

  useEffect(() => {
    const data = dataPizzas.find((pizza) => pizza.id === id);

    setDataPizza(data);
  }, []);

  return (
    <div className="cont-home">
      <p>{dataPizza.desc}</p>
    </div>
  );
};

export default PizzaDetail;
