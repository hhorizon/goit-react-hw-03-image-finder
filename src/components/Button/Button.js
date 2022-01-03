import propTypes from "prop-types";
import { StyledButton } from "./Button.style";

const Button = ({ text, onClick }) => {
  return (
    <StyledButton type="button" onClick={() => onClick()}>
      {text}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  onClick: propTypes.func,
  text: propTypes.string,
};
