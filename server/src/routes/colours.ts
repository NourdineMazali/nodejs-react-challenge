import { Router } from "express";
import {
    getColours,
    postColour,
    deleteColour
} from "../controllers/colours";

/**
 * Define various routes for the colours controller
 */
const coloursRouter = Router();
coloursRouter.get("/colours", getColours);
coloursRouter.post("/colours", postColour);
coloursRouter.post("/colours", postColour);
coloursRouter.delete("/colours/:id", deleteColour);

export default coloursRouter;