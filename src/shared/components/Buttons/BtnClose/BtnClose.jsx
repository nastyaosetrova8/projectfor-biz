import PropTypes from "prop-types";
import { AiOutlineCloseS, BtnCloseS } from "./BtnCloseStyled";

const BtnClose = ({ onClick, type }) => {
  return (
    <>
      <BtnCloseS type={type} onClick={onClick}>
        <AiOutlineCloseS />
      </BtnCloseS>
    </>
  );
};

BtnClose.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.any,
};

export default BtnClose;
