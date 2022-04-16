import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  Col,
  Row,
} from "reactstrap";
const set = new Set();
const typeColorMap = {
  grass: "#9bcc50",
  poison: "#b97fc9",
  fire: "#fd7d24",
  flying: "#3dc7ef",
  water: "#4592c4",
  bug: "#729f3f",
  normal: "#a4acaf",
  ground: "#ab9842",
  electric: "#eed535",
  fairy: "#fdb9e9",
  fighting: "#d56723",
  psychic: "#f366b9",
  steel: "#9eb7b8",
  rock: "#a38c21",
  ghost: "#7b62a3",
  ice: "#51c4e7",
  dragon: "#f16e57",
};

const PokemonCard = ({ url, tag }) => {
  console.info("set is", set);
  const [pokemonDetails, setPokemonDetails] = useState({});
  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemonDetails(res.data);
      console.info("res.data", res.data);
    });
  }, []);
  return (
    <Col sm="3" className="mt-3">
      <Card style={{ border: "none" }}>
        <Link
          to={`pokemon-details/${pokemonDetails?.species?.name}`}
          state={pokemonDetails}
        >
          <CardImg
            alt="Card image cap"
            src={
              pokemonDetails?.sprites?.other?.["official-artwork"]
                ?.front_default
            }
            style={{ backgroundColor: "#d7d5d5", borderRadius: "0.5rem" }}
            top
            width="100%"
          />
        </Link>
        <CardBody>
          <CardSubtitle className="mb-2 text-muted d-flex" tag="h6">
            {tag}
          </CardSubtitle>
          <CardText className="d-flex mb-0" tag="h5">
            {" "}
            {pokemonDetails?.species?.name.charAt(0).toUpperCase() +
              pokemonDetails?.species?.name.slice(1)}
          </CardText>
          <Row className="mt-1">
            {(pokemonDetails?.types || []).map((type) => {
              console.info(typeColorMap[type?.type?.name]);
              console.info(type?.type?.name);
              return (
                <Col sm="3">
                  <Badge
                    color={typeColorMap[type?.type?.name] || "#f16e57"}
                    style={{
                      backgroundColor: `${
                        `${typeColorMap[type?.type?.name]} ` || "#f16e57"
                      }`,
                    }}
                  >
                    {type?.type?.name}
                  </Badge>
                </Col>
              );
            })}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PokemonCard;
