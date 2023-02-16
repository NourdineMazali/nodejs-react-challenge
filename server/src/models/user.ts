import { IUser } from "../interfaces/user";
import { model, Schema } from "mongoose";

/** Mongoose Schema for the colour */
const userSchema: Schema = new Schema(
	{
        username: {
			type: String,
			required: true,
        },
        email: {
			type: String,
			required: true,
        },
        password: {
			type: String,
			required: true,
        },
	},
	{ timestamps: true }
);

export default model<IUser>("User", userSchema);