import styled from "styled-components";

export const BtnToggleFormS = styled.button`
  margin-top: 16px;
  font-size: 16px;
  line-height: 1;
  background-color: transparent;
  color: #41ddd3;
  border: none;
  border-bottom: 2px solid #41ddd3;
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

export const QuestionS = styled.span`
  color: #797a7a;
`;
