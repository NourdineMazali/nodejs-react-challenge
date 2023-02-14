import { Colour } from "../interfaces/colour";
import { model, Schema } from "mongoose";

/** Mongoose Schema for the colour */
const colourSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export default model<Colour>("Colour", colourSchema);