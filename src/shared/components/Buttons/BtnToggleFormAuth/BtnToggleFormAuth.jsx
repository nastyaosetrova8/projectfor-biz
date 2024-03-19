import PropTypes from "prop-types";
import { BtnToggleFormAuthS } from "./BtnToggleFormAuthStyled";

const BtnToggleFormAuth = ({ children }) => {
  return (
    <>
      <BtnToggleFormAuthS type="button">{children}</BtnToggleFormAuthS>
    </>
  );
};

export default BtnToggleFormAuth;

BtnToggleFormAuth.propTypes = {
  children: PropTypes.any,
};
