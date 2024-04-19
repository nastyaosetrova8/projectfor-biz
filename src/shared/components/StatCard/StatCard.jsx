import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { BoxStyled, CardTitleStyled } from "./StatCardStyled";

const StatCard = ({ title, value, icon }) => {
  return (
    <BoxStyled sx={{}}>
      <CardTitleStyled>
        {icon}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "inherit",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          {title}
        </Typography>
      </CardTitleStyled>

      <Typography variant="h3" fontWeight="600">
        {value}
      </Typography>
    </BoxStyled>
  );
};

StatCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  icon: PropTypes.element,
};

export default StatCard;
