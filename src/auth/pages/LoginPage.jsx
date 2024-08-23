import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/";

const FormData = {
  email: "",
  password: "",
};
export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm(FormData);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmitForm = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login Form">
      <form
        onSubmit={onSubmitForm}
        className="animate__animated animate__fadeIn animate__faster"
      >
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
          <Grid container display={!!errorMessage ? "" : "none"} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert variant="filled" severity="error">
                {errorMessage}
              </Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
              >
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
