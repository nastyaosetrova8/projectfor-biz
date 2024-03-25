import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { BoxStyled, CardTitleStyled } from "./StatCardStyled";

const StatCard = ({ title, value, icon }) => {
  return (
    <BoxStyled
      // gridColumn="span 2"
      // gridRow="span 1"
      // display="flex"
      // flexDirection="column"
      // justifyContent="space-between"
      // p="1rem 1rem"
      // flex="1 1 100%"
      //   backgroundColor={}
      // borderRadius="0.55rem"
      sx={{}}
    >
      <CardTitleStyled>
        {icon}
        <Typography
          variant="h6"
          // mr={6}
          sx={{
            //   color:
            fontFamily: "inherit",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          {title}
        </Typography>
      </CardTitleStyled>

      <Typography
        variant="h3"
        fontWeight="600"
        sx={
          {
            //   color:
          }
        }
      >
        {value}
      </Typography>
    </BoxStyled>
  );
};

StatCard.propTypes = {
  title: PropTypes.any,
  value: PropTypes.any,
  icon: PropTypes.any,
};

export default StatCard;
