import React, { useEffect } from "react";
import "./InfoBar.css";

const InfoBar = ({ points, highScore, setHighScore }) => {
  useEffect(() => {
    setHighScore((currentHighScore) => {
      return points >= currentHighScore ? points : currentHighScore;
    });
  }, [points]);

  return (
    <div className="infobar-container">
      <h4>Current points: {points}</h4>
      <h4>High Score: {highScore}</h4>
    </div>
  );
};

export default InfoBar;
