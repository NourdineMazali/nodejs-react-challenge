import express, { Express } from "express";
// import {auth} from "./middleware/auth";
import coloursRouter from "./routes/colours";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

const PORT: string | number = process.env.PORT || 3000;
dotenv.config();

const app: Express = express();

// Put other routes here

app
    // .use(auth)
    .use(cors())
    .use(express.json())
    .use(express.urlencoded())
    .use(coloursRouter)
    .use("*", (_, res) => res.status(404).json({ error: "Not Found" }));

    mongoose
        .connect(`mongodb://db:27017`)
        .then(() =>
            app.listen(PORT, () => console.log(`Server running on ${PORT}`))
        )
        .catch((error) => {
            console.log(error);
        });