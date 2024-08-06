import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((result) =>
          fetch(result.url).then((res) => res.json())
        );
        Promise.all(fetches).then((results) => setCharacters(results));
      });
  }, []);

  console.log(characters);

  return (
    <div>
      {characters.map((character) => {
        return (
          <div>
            <div className="imageContainer">
              <img src={character.sprites.front_default} alt={character.name} />
            </div>

            <h3>{character.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default App;
