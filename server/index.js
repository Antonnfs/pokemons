import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import mongoose from "mongoose";
import connectDB from "./config/dbConnection.js";
import pokemonModel from "./model/Pokemon.js";
// const pokemonModel = require("./model/Pokemon.js")

dotenv.config();

connectDB();

const PORT = 3500;

const app = express();

app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(express.json());

app.use("/api", router);

// app.get("/api/pokemons", async (req, res) => {
//    console.log("Hello");
//    const result = await pokemonModel.find({});
// 	console.log(result);
//    res.json(result);
//    // res.send("Hello")
// });

mongoose.connection.once("open", () => {
   console.log("Connected to MongoDB");
   app.listen(PORT, () => console.log(`Server started on PORT ${PORT}...`));
});
