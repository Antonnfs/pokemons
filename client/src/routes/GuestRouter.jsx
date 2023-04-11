import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Pokemons from "../pages/Pokemons.jsx";

const GuestRouter = () => {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path={"/"} element={<Pokemons />} />
            <Route path={"/*"} element={<Navigate to={"/"} replace />} />
         </Routes>
			<Footer />
      </BrowserRouter>
   );
};

export default GuestRouter;
