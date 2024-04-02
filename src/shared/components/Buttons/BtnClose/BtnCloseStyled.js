import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const BtnCloseS = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
    top: 16px;
    right: 16px;
  }
`;

export const AiOutlineCloseS = styled(AiOutlineClose)`
  width: 26px;
  height: 26px;
  fill: #41ddd3;

  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
