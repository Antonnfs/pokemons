import { Router } from "express";
import pokemonModel from "../model/Pokemon.js";

const router = Router();

export const getPokemons = async (req, res) => {
   const result = await pokemonModel.find({});
   res.json(result);
};

router.get("/pokemons", getPokemons);

export default router;
