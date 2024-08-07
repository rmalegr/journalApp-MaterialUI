import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { JornalRoutes } from "../journal/routes/JornalRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<JornalRoutes />} />
      </Routes>
    </>
  );
};
