import PropTypes from "prop-types";
import { BtnToggleFormS } from "./BtnToggleFormStyled";

const BtnToggleForm = ({ children }) => {
  return <BtnToggleFormS type="button">{children}</BtnToggleFormS>;
};

export default BtnToggleForm;

BtnToggleForm.propTypes = {
  children: PropTypes.node,
};
