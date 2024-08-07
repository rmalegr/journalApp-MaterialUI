import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { prupleTheme } from "./purpleTheme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ prupleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
