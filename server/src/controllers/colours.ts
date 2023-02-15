import { Response, Request } from "express";
import { IColour } from "../interfaces/colour";
import Colour from "../models/colour";
import { statusCodes } from "../utils/statusCodes";
import mongoose from "mongoose";

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

/**
 * Create a new colour
 * @route POST /colours
 */
const postColour = async (req: Request, res: Response): Promise<void> => {
	try {
		const body = req.body as Pick<IColour, "name">;

		const colour: IColour = new Colour({
			name: body.name,
		});

		const newColour = await colour.save();

		res.status(statusCodes.SUCCESS).json({
			colour: newColour,
		});
	} catch (err) {
		if (err instanceof mongoose.Error.ValidationError) {
			res.status(statusCodes.BAD_REQUEST).json({
				message: "Validation Error",
			});
		} else {
			res.status(statusCodes.SERVER_ERROR).json({
				message: "Internal server Error",
			});
		}
	}
};

export { getColours, postColour };
