import { styled } from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  border-radius: 50%;
  height: 100%;
  border: 1px solid #23fcee;
  box-shadow: 0-1px 7px 0px rgba(238, 231, 231, 0.05);

  &:hover,
  &:focus {
    background-color: red;
  }
`;
