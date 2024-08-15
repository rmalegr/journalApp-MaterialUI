import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* NavNar  drawerWidth */}
      <NavBar drawerWidth={drawerWidth} />
      {/* Sidebar drawerWidth */}
      <SideBar drawerWidth={drawerWidth} />
      {/* Main content */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        <Toolbar />
        {/* Content */}
        {children}
      </Box>
      {/* Footer */}
      {/* <Footer /> */}
    </Box>
  );
};
