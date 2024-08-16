import {
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    console.log("googleOnSignIn");
    dispatch(checkingCredentials());
    const result = await singInWithGoogle(); //Cuando obtengo la respuesta del thunks autentico el usuario
    console.log(result);
    if (result.ok) return dispatch(login(result));
    if (!result.ok) return dispatch(logout(result.errorMessage));
  };
};

export const starCreatingUserrWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};
