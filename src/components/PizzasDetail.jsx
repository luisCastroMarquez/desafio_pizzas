import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
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
    <Card style={{ display: "flex" }}>
      <Card.Img
        width="400px"
        height="330px"
        variant="top"
        src={dataPizza.img}
      />
      <Card.Body>
        <Card.Text>{dataPizza.name}</Card.Text>
        <Card.Text>{dataPizza.desc}</Card.Text>
        <Card.Text>{dataPizza.ingredients}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PizzaDetail;
