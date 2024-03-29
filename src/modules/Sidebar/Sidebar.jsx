import PropTypes from "prop-types";
import {
  Box,
  // Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    title: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    title: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    title: "Products",
    icon: <ShoppingCartOutlined />,
  },
  // {
  //   title: "Suppliers",
  //   icon: <ReceiptLongOutlined />,
  // },
];

const Sidebar = ({
  //   user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonDesktop,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  // const theme = useTheme();

  useEffect(() => {
    if (isNonDesktop) {
      setIsSidebarOpen(false);
    }
    if (!isNonDesktop) {
      setIsSidebarOpen(true);
    }
    setActive(pathname.substring(1));
  }, [isNonDesktop, pathname, setIsSidebarOpen]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: "black",
              backgroundColor: "#41ddd3",
              boxSixing: "border-box",
              border: "1px solid #23fcee",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="12px 0 68px 44px" sx={{ width: "30px", height: "30px" }}>
              {/* m="1.68rem 1.25rem 3.43rem 2.8rem" */}
              {/* <FlexBetween color={"red"}> */}
              {/* <Box display="flex" alignItems="center" gap="0.5rem"> */}
              {/* <Typography variant="p" fontWeight="bold">
                    YourBIZ
                  </Typography> */}
              {/* </Box> */}
              {isNonDesktop && (
                <IconButton
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  sx={{ width: "100%", height: "100%" }}
                >
                  <CloseIcon />
                </IconButton>
              )}
              {/* </FlexBetween> */}
            </Box>
            <List>
              {navItems.map(({ icon, title }) => {
                const lcTitle = title.toLowerCase();

                return (
                  <ListItem
                    key={title}
                    sx={{
                      "& .MuiListItemIcon-root": {
                        margin: "0",
                        padding: "0",
                      },
                      // "& .MuiListItem-root.MuiListItem-gutters.MuiListItem-padding.css-12cf8da-MuiListItem-root":
                      //   {
                      //     padding: "0",
                      //   },
                    }}
                    // disablePadding
                  >
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcTitle}`);
                        setActive(lcTitle);
                      }}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0",
                        maxWidth: "44px",
                        width: "100%",
                        height: "44px",
                        borderRadius: "100%",
                        border: "1px solid #23fcee",
                        boxShadow: "0-1px 7px 0px rgba(238, 231, 231, 0.05)",
                        backgroundColor: "#ffffff",
                        // color: active === lcTitle ? "red" : "green",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          // ml: "2rem",
                          color: active === lcTitle ? "#ffffff" : "#797a7a",
                          minWidth: "20px",
                          height: " 20px",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      {/* <ListItemText primary={text} /> */}
                      {/* {active === lcTitle && (
                        <ChevronRightOutlined
                        sx={{ ml: "auto" }}
                        />
                      )} */}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          {/* <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={profile}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box> */}
        </Drawer>
      )}
    </Box>
  );
};

Sidebar.propTypes = {
  user: PropTypes.any,
  drawerWidth: PropTypes.any,
  isSidebarOpen: PropTypes.any,
  setIsSidebarOpen: PropTypes.any,
  isNonDesktop: PropTypes.any,
};

export default Sidebar;
