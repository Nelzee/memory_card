import React, { useEffect, useState } from "react";
import "./Cards.css";
import Card from "./Card";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((result) =>
          fetch(result.url).then((res) => res.json())
        );
        Promise.all(fetches).then((results) => setCharacters(results));
      });
  }, []);

  return (
    <div className="card-container">
      {characters.map((character, index) => (
        <Card
          key={index}
          link={character.sprites.front_default}
          name={character.name}
        />
      ))}
    </div>
  );
};

export default App;
