import dotenv from "dotenv";

export = {
    secret: process.env.JWT_SECRET
};
dotenv.config();
