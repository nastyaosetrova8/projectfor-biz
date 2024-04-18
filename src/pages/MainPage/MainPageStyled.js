import styled from "styled-components";

export const MainPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 90px;
  gap: 216px;

  @media screen and (max-width: 1440px) {
    gap: 156px;
  }
`;

export const LogoContainer = styled.div`
  align-self: flex-start;
  max-width: 614px;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 164px;

  @media screen and (max-width: 1440px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 59px;
  }
`;

export const SloganWrapper = styled.div`
  max-width: 614px;
  width: 100%;
`;

export const SloganS = styled.p`
  font-size: 54px;
  line-height: 1.1;
  font-weight: 600;
  color: #747575;
`;
