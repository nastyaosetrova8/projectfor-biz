import PropTypes from "prop-types";
import { PlusStyled, BtnStyled } from "./BtnAddStyled";

const BtnAdd = ({ onClick }) => {
  return (
    <>
      <BtnStyled type="button" name="addTrans" onClick={onClick}>
        <PlusStyled />
      </BtnStyled>
    </>
  );
};

BtnAdd.propTypes = {
  onClick: PropTypes.any,
};

export default BtnAdd;
