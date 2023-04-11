import React, { useEffect, useState } from "react";
import { Link, useLocation, useRoutes } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
   const { pathname } = useLocation();
   console.log(pathname);
   const [active, setActive] = useState(pathname);
   console.log(active);
   useEffect(() => {
      setActive(pathname);
   }, [pathname]);

   return (
      <header className="header">
         <Link className="header__logo" to="/">
            <img src={logo} className="header__img" />
         </Link>
         <div className="header__menu">
            <Link
               to="/"
               className={
                  active === "/"
                     ? "header__button header__button_active"
                     : "header__button"
               }
            >
               Pokemon List
            </Link>
            <Link
               to="/user-pokemons"
               className={
                  active === "/user-pokemons"
                     ? "header__button header__button_active"
                     : "header__button"
               }
            >
               User Pokemons
            </Link>
         </div>
      </header>
   );
};

export default Header;
