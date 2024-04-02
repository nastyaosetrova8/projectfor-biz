import PropTypes from "prop-types";
import { BtnConfirmS } from "./BtnConfirmStyled";

const BtnConfirm = ({ variant, children, type, onClick }) => {
  return (
    <>
      <BtnConfirmS className={variant} type={type} onClick={onClick}>
        {children}
      </BtnConfirmS>
    </>
  );
};

BtnConfirm.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.any,
  type: PropTypes.any,
  onClick: PropTypes.func,
};

export default BtnConfirm;
