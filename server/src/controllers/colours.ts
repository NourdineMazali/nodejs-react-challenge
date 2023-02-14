import { Response, Request } from "express";
import { IColour } from "../interfaces/colour";
import Colour from "../models/colour";
import { statusCodes } from "../utils/statusCodes";

/**
 * Fetch all Colours
 * @route GET /colours
 */
const getColours = async (_: Request, res: Response): Promise<void> => {
	try {
		const colours: IColour[] = await Colour.find();
		res.status(statusCodes.SUCCESS).json({ colours: colours });
	} catch (err) {
		res.status(statusCodes.SERVER_ERROR).json({
			message: "Internal Server Error",
		});
	}
};

