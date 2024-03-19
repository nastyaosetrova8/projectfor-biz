import PropTypes from "prop-types";
import { BtnConfirmAuthS } from "./BtnConfirmAuthStyled";


const BtnConfirmAuth = ({ children }) => {
  return (
    <>
      <BtnConfirmAuthS type="submit">{children}</BtnConfirmAuthS>
    </>
  );
};

export default BtnConfirmAuth;

BtnConfirmAuth.propTypes = {
    children: PropTypes.any,
  };