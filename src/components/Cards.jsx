import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaCartPlus, FaEye, FaPizzaSlice } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usePizzaContext } from "../context/PizzaContext";

const CardPizza = ({ dataPizza }) => {
  const navigate = useNavigate();
  const { addToCart } = usePizzaContext();

  const redirectToDetail = () => navigate("/pizza/" + dataPizza.id);
  const handleAddToCartClick = (pizza) => {
    addToCart(pizza);
  };

  // Función para formatear el valor a pesos chilenos
  const formatToChileanPesos = (value) => {
    return value.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  return (
    <Card className="cardBg" bg="light" expand="lg">
      <Card.Img height="160px" variant="top" src={dataPizza.img} />
      <Card.Body>
        <Card.Title>{dataPizza.name}</Card.Title>
        <Card.Text>Ingredientes:</Card.Text>
        <Card.Text>
          {dataPizza.ingredients.map((ingredient) => (
            <div>
              <FaPizzaSlice /> {ingredient}
            </div>
          ))}
        </Card.Text>
        <Card.Body>
          <Card.Text>{formatToChileanPesos(dataPizza.price)}</Card.Text>
          <Button variant="primary" onClick={redirectToDetail}>
            Ver Más <FaEye />
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleAddToCartClick(dataPizza)}
          >
            Añadir <FaCartPlus />
          </Button>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
