import propTypes from "prop-types";
import "./index.scss";

const CloseButton = ({ onClick }) => (
  <button
    className="close-button"
    onClick={onClick}
  >
    Close
  </button>
);

CloseButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default CloseButton;