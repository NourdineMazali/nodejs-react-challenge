import express, { Express } from "express";
// import {auth} from "./middleware/auth";
import coloursRouter from "./routes/colours";
import authRouter from "./routes/auth";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

const PORT: string | number = process.env.PORT || 4000;
dotenv.config();

const app: Express = express();

// Put other routes here

app
    .use(cors({
        origin: 'http://localhost:3001',
        credentials: true
    }))
    .use(express.json())
    .use(express.urlencoded())
    .use(coloursRouter)
    .use(authRouter)
    .use("*", (_, res) => res.status(404).json({ error: "Not Found" }));

    mongoose
        .connect(`mongodb://localhost:27017`)
        .then(() =>
            app.listen(PORT, () => console.log(`Server running on ${PORT}`))
        )
        .catch((error) => {
            console.log(error);
        });