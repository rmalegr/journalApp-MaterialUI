import { Navigate, Route, Routes } from "react-router-dom";
import { JornalRoutes } from "../journal/routes/JornalRoutes";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { AuthRoutes } from "../auth/routes";

export const AppRouter = () => {

  const status  = useCheckAuth()

  if (status === 'checking') {
    return (
      <CheckingAuth />
    )
  }
  return (

    <>
      <Routes>
        {(status === 'authenticated') 
          ? <Route path="/*" element={<JornalRoutes />} /> 
          :<Route path="/auth/*" element={<AuthRoutes />} />
        }
        <Route path="/*" element={<Navigate to='/auth/login' />} />       
      </Routes>
    </>
  );
};
