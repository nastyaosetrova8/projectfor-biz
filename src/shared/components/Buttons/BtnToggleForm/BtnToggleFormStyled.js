import styled from "styled-components";

export const BtnToggleFormS = styled.button`
  margin-top: 16px;
  font-family: "GilroyBold";
  font-size: 16px;
  line-height: 1;
  background-color: transparent;
  color: #f4f4f4;
  border: none;
  border-bottom: 1px solid #f4f4f4;
  cursor: pointer;
  transition: border-bottom 250ms linear;

  &:hover,
  &:focus {
    border-bottom: 1px solid #f4f4f44d;
  }

  @media screen and (max-width: 768px) {
    max-width: 295px;
    font-size: 14px;
    line-height: 1.1;
  }
`;
