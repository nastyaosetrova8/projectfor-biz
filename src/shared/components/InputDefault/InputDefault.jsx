import PropTypes from "prop-types";
import { InputS } from "./InputDefaultStyled";


const InputDefault = ({ variant, ...restProps }) => (
  <InputS className={variant} {...restProps} />
);

export default InputDefault;


InputDefault.propTypes = {
    variant: PropTypes.any,
  };