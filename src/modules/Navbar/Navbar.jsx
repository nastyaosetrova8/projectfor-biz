import PropTypes from "prop-types";
import {
  //   LightModeOutlined,
  //   DarkModeOutlined,
  Menu as MenuIcon,

  //   SettingsOutlined,
  ArrowDropDownOutlined,
  // Search,
  // Dashboard,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
// import { setMode } from "state";
import profile from "../../assets/images/profile.jpg";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  // InputBase,
  // useTheme,
} from "@mui/material";
import FlexBetween from "../../shared/components/FlexBetween/FlexBetween";
import { useState } from "react";
import { logOutUserThunk } from "../../redux/Thunks/userThunk";
import PublicIcon from "@mui/icons-material/Public";
import { useLocation } from "react-router-dom";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen, isNonDesktop }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogOut = () => {
    dispatch(logOutUserThunk());
  };

  const isDashboard = location.pathname === "/dashboard";
  const isCastomersPage = location.pathname === "/customers";
  const isProductsPage = location.pathname === "/products";

  return (
    <AppBar
      sx={{
        // position: "static",
        background: "#ffffff",
        boxShadow: "none",
        borderBottom: "1px solid #23fcee",
        position: "fixed",
        height: "84px",
        display: "flex",
        justifyContent: "center",
        // zIndex: "1300px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left */}

        <FlexBetween>
          {isNonDesktop && (
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <MenuIcon />
            </IconButton>
          )}

          <FlexBetween>
            <PublicIcon
              sx={{
                width: "40px",
                height: "40px",
                color: "#24bfb5",
              }}
            />
          </FlexBetween>
          <FlexBetween
            style={{
              // display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              height: "60px",
            }}
          >
            <Typography
              fontWeight="bold"
              fontSize="16px"
              sx={{ color: "#24bfb5" }}
            >
              YourBiz
            </Typography>

            <FlexBetween sx={{ flexWrap: "wrap" }}>
              <Typography
                // fontWeight="bold"
                fontSize="12px"
                sx={{ color: "#24bfb5" }}
              >
                {isDashboard && "Dashboard"}
                {isCastomersPage && "All customers"}
                {isProductsPage && "All products"} &#124;&nbsp;
              </Typography>
              <Typography
                // fontWeight="bold"
                fontSize="12px"
                lineHeight="1"
                sx={{ color: "#24bfb5" }}
              >
                {user.email}
              </Typography>
            </FlexBetween>
          </FlexBetween>
          {/* <FlexBetween
            backgroundColor={"red"}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween> */}
        </FlexBetween>

        {/* Right */}
        {/* <FlexBetween gap="1.5rem"> */}
        {/* <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton> */}

        <FlexBetween>
          <Button
            onClick={handleClick}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textTransform: "none",
              gap: "1rem",
            }}
          >
            <Box
              component="img"
              alt="profile"
              src={profile}
              height="32px"
              width="32px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
            <Box textAlign="left">
              <Typography
                fontWeight="bold"
                fontSize="0.85rem"
                sx={{ color: "#797a7a" }}
              >
                {user.name}
              </Typography>
              {/* <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography> */}
            </Box>
            <ArrowDropDownOutlined
              sx={{ color: "#41ddd3", fontSize: "25px" }}
            />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <MenuItem onClick={() => handleLogOut()} sx={{ color: "#797a7a" }}>
              Log Out
            </MenuItem>
          </Menu>
        </FlexBetween>
        {/* </FlexBetween> */}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  user: PropTypes.any,
  isSidebarOpen: PropTypes.any,
  setIsSidebarOpen: PropTypes.any,
  isNonDesktop: PropTypes.bool,
};

export default Navbar;
