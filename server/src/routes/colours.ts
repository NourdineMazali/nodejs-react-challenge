import { Router } from "express";
import {
	getColours,
} from "../controllers/colours";

/**
 * Define various routes for the colours controller
 */
const coloursRouter = Router();
coloursRouter.get("/colours", getColours);

export default coloursRouter;