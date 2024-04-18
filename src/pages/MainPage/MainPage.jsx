import { Typography } from "@mui/material";
import AuthPage from "../AuthPage/AuthPage";
import {
  LogoContainer,
  LogoWrapper,
  MainPageContainer,
  SloganS,
  SloganWrapper,
  Wrapper,
} from "./MainPageStyled";
import PublicIcon from "@mui/icons-material/Public";

const MainPage = () => {
  return (
    <MainPageContainer>
      <LogoContainer>
        <LogoWrapper>
          <PublicIcon
            sx={{
              width: "40px",
              height: "40px",
              color: "#24bfb5",
            }}
          />
          <Typography
            fontWeight="bold"
            fontSize="16px"
            sx={{ color: "#24bfb5" }}
          >
            YourBiz
          </Typography>
        </LogoWrapper>
      </LogoContainer>
      <Wrapper>
        <SloganWrapper>
          <SloganS>
            With us, your business can bid farewell to all worries
          </SloganS>
        </SloganWrapper>

        <AuthPage />
      </Wrapper>
    </MainPageContainer>
  );
};

export default MainPage;
