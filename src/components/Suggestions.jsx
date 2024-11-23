import { useEffect, useState } from "react";
import SuggestionCard from "./SuggestionCard";
import "../styles/suggestions.css";

function Suggestions() {
  const randomAnimeUrl = "https://api.jikan.moe/v4/random/anime";

  const [anime1, setAnime1] = useState(null);
  const [anime2, setAnime2] = useState(null);
  //   const [like, setLike] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response1 = await fetch(randomAnimeUrl);
      const data1 = await response1.json();
      setAnime1(data1);

      const response2 = await fetch(randomAnimeUrl);
      const data2 = await response2.json();
      setAnime2(data2);
    };
    fetchData();
  }, []);

  return (
    <div className="suggestions-body">
      <h2>How About a Few Suggestions</h2>
      <button className="randomize-btn">Randomize</button>
      <div className="suggestion-cards">
        {/* <img src="/images/like.svg" alt="Like Button" className="like-btn" /> */}
        {anime1 && (
          <SuggestionCard
            cardImg={<img src={anime1.data.images.jpg.image_url} alt="Anime" />}
            title={anime1.data.title}
            synopsis={anime1.data.synopsis}
          />
        )}
        {anime2 && (
          <SuggestionCard
            cardImg={<img src={anime2.data.images.jpg.image_url} alt="Anime" />}
            title={anime2.data.title}
            synopsis={anime2.data.synopsis}
          />
        )}
      </div>
    </div>
  );
}
export default Suggestions;
