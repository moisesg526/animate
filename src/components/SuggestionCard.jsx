import PropTypes from "prop-types";

function SuggestionCard({ cardImg, title, synopsis }) {
  return (
    <div className="suggestion-card">
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
