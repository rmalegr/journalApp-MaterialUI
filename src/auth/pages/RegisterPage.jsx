import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              name="nombre"
              placeholder="Nombre Completo"
              fullWidth
            />{" "}
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Correo "
              type="email"
              name="correo"
              placeholder="Correo Electrónico"
              fullWidth
            />{" "}
          </Grid>
          <Grid item xs={12} sx={{ mb: 2, mt: 1 }}>
            <TextField
              label="Contraseña"
              type="password"
              name="password"
              placeholder="contraseña"
              fullWidth
            />{" "}
          </Grid>
          
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>{" "}
            {/* Enlace para redireccionar a la pagina de registro */}
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
