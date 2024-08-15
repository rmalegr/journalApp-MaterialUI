import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const prupleTheme = createTheme({
  palette: {
    primary: {
      main: "#fc9d03",
    },
    secondary: {
      main: "#543884",
    },
    error: {
      main: red.A400,
    },
  },
});
