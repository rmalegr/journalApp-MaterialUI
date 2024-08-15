import { useDispatch } from "react-redux";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "rodrigomalegre@gmail.com",
    password: "123456",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication());
  };
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login Form">
      <form onSubmit={onSubmitForm}>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Correo"
              type="email"
              name="email"
              placeholder="rodrigomalegre@gmail.com"
              onChange={onInputChange}
              value={email}
              fullWidth
            />{" "}
          </Grid>
          <Grid item xs={12} sx={{ mb: 2, mt: 1 }}>
            <TextField
              label="Contraseña"
              type="password"
              name="password"
              placeholder="contraseña"
              value={password}
              onChange={onInputChange}
              fullWidth
            />{" "}
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            {/* Enlace para redireccionar a la pagina de registro */}
            <Typography sx={{ mr: 1 }}>¿No tienes cuenta?</Typography>
            <Button>
              <Link component={RouterLink} to="/auth/register">
                Registrate
              </Link>{" "}
            </Button>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
