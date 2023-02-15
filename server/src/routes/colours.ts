import { Router } from "express";
import {
    getColours,
    postColour
} from "../controllers/colours";

/**
 * Define various routes for the colours controller
 */
const coloursRouter = Router();
coloursRouter.get("/colours", getColours);
coloursRouter.post("/colours", postColour);

export default coloursRouter;