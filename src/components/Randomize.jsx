import { useState } from "react";
import Suggestions from "./Suggestions";

function Randomize() {
  const [randomize, setRandomize] = useState(0);

  const handleClick = () => {
    setRandomize((prevKey) => prevKey + 1); // Increment key to trigger re-render
  };

  return (
    <div>
      <button className="randomize-btn" onClick={handleClick}>
        Randomize
      </button>
      <Suggestions key={randomize} /> {/* Pass unique key */}
    </div>
  );
}

export default Randomize;
