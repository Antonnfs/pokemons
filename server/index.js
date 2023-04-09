import express from "express";
import cors from "cors";

const PORT = 3500;

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

app.use("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}...`));
