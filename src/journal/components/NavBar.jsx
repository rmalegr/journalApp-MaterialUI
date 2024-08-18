import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";

export const NavBar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch( startLogout() )
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton>
          <MenuOutlined sx={{ color: "white" }} />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            JournalApp
          </Typography>
          <Tooltip title="Cerrar sesión">
            <IconButton color="error"  onClick={onLogout}>
            <LogoutOutlined />
            </IconButton>
          </Tooltip>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  drawerWidth: PropTypes.number,
};
