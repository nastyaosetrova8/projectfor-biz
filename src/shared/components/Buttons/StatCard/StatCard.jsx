import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import FlexBetween from "../../FlexBetween/FlexBetween";

const StatCard = ({ title, value, icon }) => {
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      //   backgroundColor={}
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Typography
          variant="h6"
          sx={
            {
              //   color:
            }
          }
        >
          {title}
        </Typography>
        {icon}
      </FlexBetween>

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
    </Box>
  );
};

StatCard.propTypes = {
  title: PropTypes.any,
  value: PropTypes.any,
  icon: PropTypes.any,
};

export default StatCard;
