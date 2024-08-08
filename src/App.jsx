import React, { useState } from "react";
import Cards from "./components/Cards";
import InfoBar from "./components/InfoBar";

const App = () => {
  const [points, setPoints] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <div>
      <InfoBar
        points={points}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <Cards points={points} setPoints={setPoints} />
    </div>
  );
};

export default App;
