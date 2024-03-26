import { styled } from "styled-components";
import { BsPlusLg } from "react-icons/bs";

export const BtnStyled = styled.button`
  width: 42px;
  height: 42px;
  background-image: linear-gradient(
    #41ddd3 -16.42%,
    #38bdb5 97.04%,
    #23fcee 150.71%
  );
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
  color: currentColor;
  border-radius: 50%;
  border: 1px solid #23fcee;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute;
  bottom: 40px;
  right: 40px; */
  transition: 250ms;

  &:hover,
  &:focus {
    outline: none;
    background: linear-gradient(#23fcee 0%, #41ddd3 61%, #38bdb5 91%);
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
    transition: 250ms;
  }

  /* @media (max-width: 768px) {
  } */
`;

export const PlusStyled = styled(BsPlusLg)`
  width: 16px;
  height: 16px;
  background: transparent;
  color: #fbfbfb;
`;
