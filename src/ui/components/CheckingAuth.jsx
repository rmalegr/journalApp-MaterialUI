import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
      alignItems="center"
      alignContent="center"
    >
      {/* caja blanca  */}
      <Grid container
        direction='row'
        justifyContent='center'
      >
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  );
};
