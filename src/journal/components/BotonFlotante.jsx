import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const BotonFlotante = () => {
  return (
    <IconButton
      size="large"
      sx={{
        color: "white",
        backgroundColor: "error.main",
        ":hover": {
          backgroundColor: "error.main",
          Opacity: 0.9,
        },
        position: "fixed",
        right: 50,
        bottom: 50,
      }}
    >
      <AddOutlined sx={{ fontSize: 30 }} />
    </IconButton>
  );
};
