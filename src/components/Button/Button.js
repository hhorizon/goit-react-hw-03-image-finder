import propTypes from "prop-types";
import { StyledButton } from "./Button.style";

const Button = ({ text, onLoadMore }) => {
  return (
    <StyledButton type="button" onClick={() => onLoadMore()}>
      {text}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  onloadMore: propTypes.func,
  text: propTypes.string,
};
