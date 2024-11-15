import { useEffect, useState } from "react";
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
      <div className="suggestion-card">
        <div className="card-img">{anime && <img src={anime.data.images.jpg.image_url}/>}</div>
        <div className="title">{anime && <h3>{anime.data.title}</h3>}</div>
        <div className="synopsis">{anime && <p>{anime.data.synopsis}</p>}</div>
      </div>
    </div>
  );
}
export default Suggestions;
