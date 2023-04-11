import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pokemons from "../pages/Pokemons";
import UserPokemons from "../pages/UserPokemons";


const AuthRouter = () => {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path={"/"} element={<Pokemons />} />
				<Route path={"/user-pokemons"} element={<UserPokemons />} />
            <Route path={"/*"} element={<Navigate to={"/"} replace />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
};

export default AuthRouter;
