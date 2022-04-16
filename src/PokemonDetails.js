import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Col, Container, Row } from "reactstrap";

const PokemonDetails = () => {
  const navigate = useLocation();
  const [pokemonDetails, setPokemonDetails] = useState({});
  useEffect(() => {
    setPokemonDetails(navigate.state);
  }, []);
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row>
        <Col>
          <img
            src={
              pokemonDetails?.sprites?.other?.["official-artwork"]
                ?.front_default
            }
            style={{
              backgroundColor: "grey",
              borderRadius: "1rem",
            }}
          ></img>
        </Col>

        <Col>
          <h1 style={{ marginLeft: "20px", marginTop: "20px" }}>
            {pokemonDetails?.species?.name.charAt(0).toUpperCase() +
              pokemonDetails?.species?.name.slice(1)}
          </h1>
          <Row
            style={{
              backgroundColor: "#30a7d7",
              borderRadius: "1rem",
              marginTop: "20%",
            }}
            className="pt-2"
          >
            <Col sm="6" className="my-2">
              <Row
                className="w-100 d-block text-center"
                style={{
                  color: "#fff",
                  fontSize: "100%",
                  fontFamily: `"Flexo-Medium",arial,sans-serif`,
                }}
              >
                Height
              </Row>
              <Row
                className="w-100 d-block text-center"
                style={{
                  color: "#212121",
                  fontSize: "125%",
                }}
              >
                {pokemonDetails?.height}
              </Row>
            </Col>
            <Col sm="6" className="mb-2">
              <Row
                className="w-100 d-block text-center"
                style={{
                  color: "#fff",
                  fontSize: "100%",
                  fontFamily: `"Flexo-Medium",arial,sans-serif`,
                }}
              >
                Weight
              </Row>
              <Row
                className="w-100 d-block text-center"
                style={{
                  color: "#212121",
                  fontSize: "125%",
                }}
              >
                {pokemonDetails?.weight}
              </Row>
            </Col>
            <Col sm="6" className="mb-2">
              <Row
                className="w-100 d-block text-center"
                style={{
                  color: "#fff",
                  fontSize: "100%",
                  fontFamily: `"Flexo-Medium",arial,sans-serif`,
                }}
              >
                Abilities
              </Row>
              <Row
                className="w-100 d-block text-center"
                style={{
                  color: "#212121",
                  fontSize: "125%",
                }}
              >
                {pokemonDetails?.abilities?.[0]?.ability?.name}
              </Row>
            </Col>
            <Col sm="6" className="mb-2">
              <Row
                className="w-100 d-block text-center"
                style={{
                  color: "#fff",
                  fontSize: "100%",
                  fontFamily: `"Flexo-Medium",arial,sans-serif`,
                }}
              >
                Gender{" "}
              </Row>
              <Row
                className="w-100 d-block text-center"
                style={{
                  color: "#212121",
                  fontSize: "125%",
                }}
              >
                {pokemonDetails?.height}
              </Row>
            </Col>
            <Col sm="6" className="mt-2">
              <Row
                className="w-100 d-block text-center"
                style={{
                  color: "#fff",
                  fontSize: "100%",
                  fontFamily: `"Flexo-Medium",arial,sans-serif`,
                }}
              >
                Experience{" "}
              </Row>
              <Row
                className="w-100 d-block text-center"
                style={{
                  color: "#212121",
                  fontSize: "125%",
                }}
              >
                {pokemonDetails?.base_experience}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default PokemonDetails;
