import { useEffect, useState } from "react";
import SuggestionCard from "./SuggestionCard";
import "../styles/suggestions.css";

function Suggestions() {
  const randomAnimeUrl = "https://api.jikan.moe/v4/random/anime";

  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(randomAnimeUrl);
      const data = await response.json();
      setAnime(data);
    };
    fetchData();
  }, []);

  return (
    <div className="suggestions-body">
      <h2>How About a Few Suggestions</h2>
      {anime && (
        <>
          <SuggestionCard
            cardImg={<img src={anime.data.images.jpg.image_url} alt="Anime" />}
            title={anime.data.title}
            synopsis={anime.data.synopsis}
          />
          <SuggestionCard
            cardImg={<img src={anime.data.images.jpg.image_url} alt="Anime" />}
            title={anime.data.title}
            synopsis={anime.data.synopsis}
          />
        </>
      )}
    </div>
  );
}
export default Suggestions;
