// // import { useSelector } from "react-redux";
// // import Modal from "../../shared/components/Modal/Modal";
// // import AppBar from "../AppBar";
// import { Outlet } from "react-router-dom";
// // import { selectIsShowModal } from "../../redux/modal/modalSelectors";

// const SharedLayout = () => {
//   // const isShowModal = useSelector(selectIsShowModal);

//   return (
//     <div>
//       {/* <Header />
//         <Sidebar /> */}
//         <Outlet />
//         {/* {isShowModal && <Modal />} */}
//     </div>
//   );
// };

// export default SharedLayout;

// -------------------------------------------------------------

import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { selectUser } from "../redux/selectors";
import Sidebar from "../modules/Sidebar/Sidebar";
import Navbar from "../modules/Navbar/Navbar";

const SharedLayout = () => {
  const isNonDesktop = useMediaQuery("(max-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const user = useSelector(selectUser);
  // console.log(user)
  // const { data } = useSelector(selectUserId);

  return (
    <Box
      // display={isNonMobile ? "flex" : "block"}
      width="100%"
      height="100%"
    >
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
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default SharedLayout;
