import PropTypes from "prop-types";
import { useState } from "react";

function SuggestionCard({ cardImg, title, synopsis }) {
  let heart = <i className="fa-solid fa-heart like-btn"></i>;
  let solidHeart = <i className="fa-solid fa-heart"></i>;

  const [like, setLike] = useState(heart);
  const handleClick = () => {
    setLike(like ? heart : solidHeart);
  };
  return (
    <div className="suggestion-card">
      {/* <i className="fa-solid fa-heart like-btn"></i> */}
      <div className="like" onClick={handleClick}>
        {like}
      </div>
      <i className="fa-regular fa-heart like-btn"></i>
      <div className="card-img">{cardImg}</div>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="synopsis">
        <p>{synopsis}</p>
      </div>
    </div>
  );
}

SuggestionCard.propTypes = {
  cardImg: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
};

export default SuggestionCard;
