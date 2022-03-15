import React from "react";
import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { LoginScreen } from "../auth/loginScreen";
import { HomeScreen } from "../home/homeScreen";

export const RootRouter = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/auth"
            element={!isAuth ? <Outlet /> : <Navigate to="/" />}
          >
            <Route path="" element={<LoginScreen />} />
            <Route path="singup" element={<LoginScreen />} />
          </Route>
          <Route
            path="/"
            element={isAuth ? <Outlet /> : <Navigate to="/auth" />}
          >
            <Route path="" element={<HomeScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
