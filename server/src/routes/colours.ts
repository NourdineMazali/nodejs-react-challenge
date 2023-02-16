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
coloursRouter.get("/colours", authJwt.verifyToken, getColours);
coloursRouter.post("/colours", authJwt.verifyToken, postColour);
coloursRouter.post("/colours", authJwt.verifyToken, postColour);
coloursRouter.delete("/colours/:id", authJwt.verifyToken, deleteColour);

export default coloursRouter;