import styled from "styled-components";

export const BtnConfirmAuthS = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 314px;
  width: 100%;
  height: 48px;
  border-radius: 30px;
  font-family: "GilroyBold";
  color: var(--text-color-100);
  background-color: var(--blue-background);
  margin: 0 auto;
  border: transparent;
  transform: scale(1);
  transition: transform 250ms linear;
  
  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    max-width: 295px;
    font-size: 14px;
  line-height: 1.1;
  }
`;