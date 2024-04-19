import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { selectUser } from "../redux/selectors";
import Sidebar from "../modules/Sidebar/Sidebar";
import Navbar from "../modules/Navbar/Navbar";

const SharedLayout = () => {
  const isNonDesktop = useMediaQuery("(max-width: 1440px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const user = useSelector(selectUser);

  return (
    <Box display={isNonDesktop ? "block" : "flex"} width="100%" height="100%">
      <Sidebar
        user={user || {}}
        isNonDesktop={isNonDesktop}
        drawerWidth="84px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Box flexGrow={1}>
        <Navbar
          user={user || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isNonDesktop={isNonDesktop}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default SharedLayout;
