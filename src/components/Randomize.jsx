import { useState } from "react";
import SuggestionCard from "./SuggestionCard";

function Randomize() {
  const [randomize, setRandomize] = useState(false);

  const hanldeClick = () => {
    setRandomize(!randomize);
  };

  return (
    <div>
      <button className="randomize-btn" onClick={hanldeClick}>
        Randomize
      </button>
      {randomize && <SuggestionCard />}
    </div>
  );
}

export default Randomize;
