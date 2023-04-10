import mongoose, { Schema } from "mongoose";

const pokemonSchema = new Schema({
   id: String,
   name: String,
   imageUrl: String,
   type: String,
   abilities: Array,
   level: Number,
   evolution: Array,
});
const pokemonModel = mongoose.model("Pokemon", pokemonSchema);
export default pokemonModel;
// module.exports = mongoose.model("Pokemon", pokemonSchema)