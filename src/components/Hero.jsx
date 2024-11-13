import "../styles/hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="top-header">
        <img src="/images/AniMate.png" alt="logo" className="logo" />
        <div className="right-top-header">
          <h2>MY LIST</h2>
          <button className="randomize-btn">Randomize</button>
        </div>
      </div>
      <div className="hero-pitch">
        <h3>
          Not sure what to watch next? How about we select a random Anime for
          you and your friends.
        </h3>
      </div>
    </div>
  );
}

export default Hero;
