import { Router } from "express";
import {
    getColours,
    postColour,
    deleteColour
} from "../controllers/colours";
import  authJwt from "../middleware/auth";

/**
 * Define various routes for the colours controller
 */
const coloursRouter = Router();
coloursRouter.get("/api/v1/colours", authJwt.verifyToken, getColours);
coloursRouter.post("/api/v1/colours", authJwt.verifyToken, postColour);
coloursRouter.post("/api/v1/colours", authJwt.verifyToken, postColour);
coloursRouter.delete("/api/v1/colours/:id", authJwt.verifyToken, deleteColour);

export default coloursRouter;