import React, { useEffect, useState } from "react";
import "./Cards.css";
import Card from "./Card";

const App = ({ points, setPoints }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=14&offset=0")
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
      {characters?.map((character, index) => (
        <Card
          setCharacters={setCharacters}
          key={index}
          link={character.sprites.front_default}
          name={character.name}
          points={points}
          setPoints={setPoints}
          setSelectedCharacters={setSelectedCharacters}
          selectedCharacters={selectedCharacters}
        />
      ))}
    </div>
  );
};

export default App;
