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
import { SingUpScreen } from "../auth/singUpScreen";
import { HomeScreen } from "../home/homeScreen";
import { MyPokedexScreen } from "../mypokedex/myPokedexScreen";
import { PokedexScreen } from "../pokedex/pokedexScreen";

export const RootRouter = () => {
  const [isAuth,] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/auth"
            element={!isAuth ? <Outlet /> : <Navigate to="/" />}
          >
            <Route path="" element={<LoginScreen />} />
            <Route path="singup" element={<SingUpScreen />} />
          </Route>
          <Route
            path="/"
            element={isAuth ? <Outlet /> : <Navigate to="/auth" />}
          >
            <Route path="" element={<HomeScreen />} />
            <Route path="pokedex" element={<PokedexScreen />} />
            <Route path="mypokedex" element={<MyPokedexScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
