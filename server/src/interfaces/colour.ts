import { Document } from "mongodb";

/** Description of the Colour Interface */
export interface IColour extends Document {
	/** Name of the Colour */
	name: string;
}