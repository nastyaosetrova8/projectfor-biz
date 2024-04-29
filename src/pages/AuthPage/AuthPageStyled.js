import styled from "styled-components";

export const AuthPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width: 100%;

  @media screen and (max-width: 1440px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 40px;
  }
`;
