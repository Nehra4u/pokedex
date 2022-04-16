import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import pokemonLogo from "./images/pokemon.png";
import { Col, Container, Row } from "reactstrap";
import backgroundImg from "./images/pokedex.webp";
import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";
function App() {
  const [pokemonData, setPokemonData] = useState({ results: [] });
  const [searchedPokemon, setSearchedPokemon] = useState([]);
  const [fetchMore, setFetchMOre] = useState(false);
  const [searchString, setSearchString] = useState("");
  useEffect(() => {
    if (fetchMore) {
      axios.get(pokemonData.next).then((res) => {
        setPokemonData({
          ...pokemonData,
          ...res.data,
          results: [...pokemonData.results, ...res.data.results],
        });
      });
    }

    setFetchMOre(false);
  }, [fetchMore]);
  const handleScroll = () => {
    if (
      document.documentElement.scrollHeight - 30 <
      document.documentElement.scrollTop + document.documentElement.clientHeight
    ) {
      setFetchMOre(true);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      setPokemonData(res.data);
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOnChange = (e) => {
    setSearchString(e.target.value);
    console.info(
      "searched data",
      pokemonData.results.filter((obj) => obj.name.includes(e.target.value))
    );
    setSearchedPokemon(
      pokemonData.results.filter((obj) =>
        obj.name.includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <nav
        className="navbar fixed-top nav-height"
        style={{ backgroundColor: "white" }}
      >
        <Row className="row-no-gutters py-1 w-100">
          <Col sm="1">
            <img src={pokemonLogo} width={50} height={50} />
          </Col>
          <Col sm="1" className="pt-2">
            <h4 className="d-flex">Pokedex</h4>
          </Col>
          <Col sm="5"></Col>
          <Col sm="3 mt-1">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleOnChange}
            />
          </Col>
        </Row>
      </nav>
      <Container
        className="pokemon-list "
        style={{
          width: "80%",
          marginTop: `${
            20 + document.getElementsByClassName("nav-height")[0]?.clientHeight
          }px`,
          border: "1px solid black",
          background: "white",
          minHeight: "100vh",
        }}
      >
        {/* <Row
          key={`${data?.name}${key}`}
          className="align-middle"
          style={{ borderBottom: "1px solid black" }}
        > */}
        <Row className="mt-4">
          {searchString && searchedPokemon.length === 0 && (
            <div style={{ margin: "auto", marginTop: "40%" }}>
              {" "}
              No Pokemon Found{" "}
            </div>
          )}

          {(searchString && searchedPokemon.length > 0
            ? searchedPokemon
            : searchString
            ? []
            : pokemonData?.results
          ).map((data, key) => (
            <PokemonCard url={data?.url} tag={`#00${key}`} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
