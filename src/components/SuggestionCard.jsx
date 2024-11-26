import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

function SuggestionCard({ cardImg, title, synopsis }) {
  const [like, setLike] = useState(false);
  const handleClick = () => {
    setLike(!like);
  };
  return (
    <div className="suggestion-card">
      <div className="like" onClick={handleClick}>
        {like ? (
          <FontAwesomeIcon icon={solidHeart} />
        ) : (
          <FontAwesomeIcon icon={regularHeart} />
        )}
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
