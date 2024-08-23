import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SidebarItem } from "./";

export const SideBar = ({ drawerWidth }) => {
  const { displayName } = useSelector((state) => state.auth);
  // console.log("displayName = " + displayName);
  const { notes } = useSelector((state) => state.journal);
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Rodrigo Alegre
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => (
            <SidebarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
