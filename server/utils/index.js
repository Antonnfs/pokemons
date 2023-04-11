import pokemonModel from "../model/Pokemon.js";

export const getPaginatedData = async (req, sourceData = []) => {
   const path = req.path;
   let Model;
   if (path === "/pokemons") Model = pokemonModel;
   const limit = parseInt(req.query?.limit) || 8;
   let page = parseInt(req.query.page) || 1;
   try {
      const count = await Model.countDocuments();
		const pageCount = Math.ceil(count / limit);
      if (page > pageCount) page = pageCount;

      const data = await Model.find()
         .limit(limit * 1)
         .skip((page - 1) * limit)
         .exec();
      return { data, page, pageCount };
   } catch (error) {
      console.log(error);
   }
};
