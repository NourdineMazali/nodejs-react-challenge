import { IUser } from "../interfaces/user";
import { model, Schema } from "mongoose";

/** Mongoose Schema for the colour */
const userSchema: Schema = new Schema(
	{
        username: {
			type: String,
			unique: true,
			required: [true, "Username required"],
        },
        email: {
			type: String,
			trim: true,
			lowercase: true,
			unique: true,
			match: [
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Please add a valid email address.',
			  ],
        	required: [true, "Email required"]
        },
        password: {
			type: String,
			required: [true, "Password required"],
			minlength: 6,

        },
	},
	{ timestamps: true }
);

export default model<IUser>("User", userSchema);