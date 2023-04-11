import React, { useEffect, useState } from "react";
import API from "../constants/api";
import { usePokemons } from "../state/pokemons";
import CardsWrapper from "../wrappers/CardsWrapper";

const Pokemons = () => {
   const setPokemons = usePokemons((state) => state.setPokemons);
   const pokemons = usePokemons((state) => state.pokemons);
	const page = usePokemons(state => state.page)

   useEffect(() => {
      setPokemons();
   }, [page]);

   return (
      <CardsWrapper>
         {pokemons.map((item) => (
            <div key={item.id} className="card">
               <button className="card__inner" key={item.id}>
                  <div className="card__image">
                     <img
                        className="card__img"
                        src={item.imageUrl}
                        alt="image"
                     />
                  </div>
                  <h2 className="card__name">{item.name}</h2>
                  <h3 className="card__type">
                     <strong>Type: </strong>
                     {item.type}
                  </h3>
                  <h3 className="card__level">
                     <strong>Level: </strong>
                     {item.level}
                  </h3>
               </button>
            </div>
         ))}
      </CardsWrapper>
   );
};

export default Pokemons;
