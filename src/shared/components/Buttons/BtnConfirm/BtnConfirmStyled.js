import styled from "styled-components";

export const BtnConfirmS = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  border-radius: 60px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.28;
  color: #797a7a;
  background-color: #41ddd3;
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  border: transparent;
  transition: border 250ms ease-in-out, box-shadow 250ms ease-in-out;

  &.btn-cancel {
    background-color: #eefbfa;
    border: 1px solid #23fcee;
  }

  &:hover,
  &:focus {
    border: 1px solid #23fcee;
    box-shadow: 1px 0px 8px 1px rgba(65, 221, 211, 0.75);
    -webkit-box-shadow: 1px 0px 8px 1px rgba(65, 221, 211, 0.75);
    -moz-box-shadow: 1px 0px 8px 1px rgba(65, 221, 211, 0.75);
  }
`;
