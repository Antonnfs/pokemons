import { create } from "zustand";
import { getPokemons } from "../utils/getPokemons";

export const usePokemons = create((set, get) => ({
   pokemons: [],
   page: 1,
   pageCount: 1,
   limit: 8,
   loading: false,
   error: "",
   setPokemons: async () => {
      set({ loading: true });
      const state = get();
      console.log(state.page);
      try {
         const res = await getPokemons(state.page);
         set({
            pokemons: res.data,
            page: res.page,
            pageCount: res.pageCount,
            loading: false,
         });
      } catch (error) {
         console.log(error);
         set({
            loading: false,
            error: error?.mesage || "Failed to fetch data",
         });
      }
   },
   setPage: (num) => {
      set({ page: num });
   },
}));
