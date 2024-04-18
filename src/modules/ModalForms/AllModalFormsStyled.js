import styled from "styled-components";
import { Select } from "@mui/material";

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 536px;
  width: 100%;
  padding: 45px 40px;
  border: 1px solid #23fcee;
  border-radius: 12px;
  background-color: #ffffff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 335px;
    padding: 40px 20px;
  }
`;

export const ModalTitle = styled.h2`
  align-self: flex-start;
  font-size: 24px;
  line-height: 1.16;
  font-weight: 600;
  color: #797a7a;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  row-gap: 14px;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 295px;
  }
`;

export const InputsGroupS = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 14px;
  width: 100%;
`;

// export const InputS = styled.input`
//   padding: 14px 18px;
//   width: 100%;
//   height: 44px;
//   border-radius: 30px;
//   border: 1px solid #23fcee;
//   font-size: 14px;
//   line-height: 1;
//   outline: 1px solid transparent;
//   background: transparent;
//   color: #626464;
//   transition: border-color 250ms ease-in-out, box-shadow 250ms ease-in-out;

//   &::placeholder {
//     color: #797a7a;
//     background: transparent;
//   }

//   &:hover,
//   &:focus {
//     border-color: #41ddd3;
//     box-shadow: 1px 0px 8px 1px rgba(65, 221, 211, 0.75);
//     -webkit-box-shadow: 1px 0px 8px 1px rgba(65, 221, 211, 0.75);
//     -moz-box-shadow: 1px 0px 8px 1px rgba(65, 221, 211, 0.75);
//   }

//   &.input-password {
//     padding: 14px 54px 14px 18px;
//   }

//   @media screen and (max-width: 768px) {
//     font-size: 14px;
//     &::placeholder {
//       line-height: 1.1;
//     }
//   }
// `;

export const SelectStyled = styled(Select)`
  width: 100%;
  height: 44px;
  border: 1px solid #23fcee;
  outline: 1px solid transparent;
  transition: border-color 250ms ease-in-out, box-shadow 250ms ease-in-out;

  .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 14px 18px;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  p {
    font-family: "Inter";
    color: #797a7a;
  }

  &:hover,
  &:focus {
    border-color: #41ddd3;
    box-shadow: 1px 0px 8px 1px rgba(65, 221, 211, 0.75);
    -webkit-box-shadow: 1px 0px 8px 1px rgba(65, 221, 211, 0.75);
    -moz-box-shadow: 1px 0px 8px 1px rgba(65, 221, 211, 0.75);
  }
`;

export const ErrorsStyled = styled.div`
  margin: 0 0;
  font-size: 12px;
  line-height: 1.1;
  color: #e65368;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 274px;
  width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`;
