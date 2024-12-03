import { useState } from "react";
import Suggestions from "./Suggestions";
import "../styles/randomize.css";

function Randomize() {
  const [randomize, setRandomize] = useState(0);

  const handleClick = () => {
    setRandomize((prevKey) => prevKey + 1);
  };

  return (
    <div className="randomize-btn-container">
      <button className="randomize-btn" onClick={handleClick}>
        Randomize
      </button>
      {randomize > 0 && <Suggestions key={randomize} />}
    </div>
  );
}

export default Randomize;
