import { Router } from "express";
import { getPaginatedData } from "../utils/index.js";

const router = Router();

export const getPokemons = async (req, res) => {
   const result = await getPaginatedData(req);
   res.json(result);
};

router.get("/pokemons", getPokemons);

export default router;
