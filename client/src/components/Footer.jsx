import React from "react";
import { usePokemons } from "../state/pokemons";

const Footer = () => {
   const page = usePokemons((state) => state.page);
   const pageCount = usePokemons((state) => state.pageCount);
   const setPage = usePokemons((state) => state.setPage);
   console.log(page);
   return (
      <footer className="footer">
         <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="footer__button footer__button_active"
         >
            Prev
         </button>
         <button
            disabled={page === pageCount}
            onClick={() => setPage(page + 1)}
            className="footer__button footer__button_active"
         >
            Next
         </button>
      </footer>
   );
};

export default Footer;
