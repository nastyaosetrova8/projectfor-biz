import PropTypes from "prop-types";
import { Box, Drawer, IconButton, List, ListItem } from "@mui/material";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonStyled } from "./SidebarStyled";

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
    icon: <ShoppingCartOutlined size={"20px"} />,
  },
];

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonDesktop,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

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
    <Box
      component="nav"
      position={isNonDesktop ? "fixed" : "relative"}
      zIndex={isNonDesktop ? "1200" : "0"}
    >
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              backgroundColor: "#41ddd3",
              boxSixing: "border-box",
              border: "1px solid #23fcee",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="12px 0 68px 44px" sx={{ width: "30px", height: "30px" }}>
              {isNonDesktop && (
                <IconButton
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  sx={{ width: "100%", height: "100%" }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Box>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
              }}
            >
              {navItems.map(({ icon, title }) => {
                const lcTitle = title.toLowerCase();

                return (
                  <ListItem
                    key={title}
                    sx={{
                      margin: "0",
                      padding: "0",
                      maxWidth: "44px",
                      width: "100%",
                      height: "44px",
                      borderRadius: "100%",
                      "& .MuiListItemIcon-root": {},
                    }}
                  >
                    <ButtonStyled
                      style={{
                        backgroundColor:
                          active === lcTitle ? "#41ddd3" : "#ffffff",
                        color: "#797a7a",
                      }}
                      onClick={() => {
                        navigate(`/${lcTitle}`);
                      }}
                    >
                      {icon}
                    </ButtonStyled>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

Sidebar.propTypes = {
  drawerWidth: PropTypes.string,
  isSidebarOpen: PropTypes.bool,
  setIsSidebarOpen: PropTypes.func,
  isNonDesktop: PropTypes.bool,
};

export default Sidebar;
