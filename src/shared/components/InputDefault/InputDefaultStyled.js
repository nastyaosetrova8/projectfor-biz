import styled from "styled-components";

export const InputS = styled.input`
  padding: 14px 18px;
  width: 100%;
  height: 44px;
  border-radius: 30px;
  border: 1px solid #23fcee;
  font-size: 14px;
  line-height: 1;
  outline: 1px solid transparent;
  background: transparent;
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
  color: #626464;
  transition: border-color 250ms ease-in-out, box-shadow 250ms ease-in-out;

  &::placeholder {
    color: #797a7a;
    background: transparent;
  }

  &:hover,
  &:focus {
    border-color: #41ddd3;
    box-shadow: 1px 0px 8px 1px rgba(65, 221, 211, 0.75);
    -webkit-box-shadow: 1px 0px 8px 1px rgba(65, 221, 211, 0.75);
    -moz-box-shadow: 1px 0px 8px 1px rgba(65, 221, 211, 0.75);
  }

  &.input-password {
    padding: 14px 54px 14px 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    &::placeholder {
      line-height: 1.1;
    }
  }
`;
