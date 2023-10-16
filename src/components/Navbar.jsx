import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus, FaPizzaSlice } from "react-icons/fa";

import { Nav, Navbar, Container } from "react-bootstrap";

const NavbarFlow = () => {
  return (
    <>
      <Navbar className="navBg" bg="light" expand="lg">
        <Container>
          <div className="cont-1">
            <Nav.Link as={Link} to="/home">
              <FaPizzaSlice />
              Pizza Mamma
            </Nav.Link>
          </div>
          <div className="cont-1">
            <Nav.Link as={Link} to="/carrito">
              <FaCartPlus />$ 38.590.-
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarFlow;
