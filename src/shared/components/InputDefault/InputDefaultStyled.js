import styled from "styled-components";

export const InputS = styled.input`
  box-sizing: border-box;
  padding: 14px 18px;
  width: 100%;
  height: 44px;
  border-radius: 30px;
  border: 1px solid rgba(29, 30, 33, 0.4);
  font-size: 16px;
  line-height: 1;
  outline: 1px solid transparent;
  background: transparent;
  color: var(--star-color-100);

  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
    background: transparent;
  }

  &:hover,
  &:focus {
    border-color: black;
  }

  &.input-password{
    padding: 14px 54px 14px 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    &::placeholder {
      line-height: 1.1;
    }
  }
`;