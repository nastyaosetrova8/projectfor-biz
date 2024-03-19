import styled from "styled-components";

export const BtnToggleFormAuthS = styled.button`
  margin-top: 16px;
  font-family: "GilroyBold";
  font-size: 16px;
  line-height: 1;
  background-color: transparent;
  color: var(--text-color-100);
  border: none;
  border-bottom: 1px solid var(--text-color-100);
  cursor: pointer;
  transition: border-bottom 250ms linear;

  &:hover,
  &:focus {
    border-bottom: 1px solid var(--text-color-30);
  }

  @media screen and (max-width: 768px) {
    max-width: 295px;
    font-size: 14px;
  line-height: 1.1;
  }
`;