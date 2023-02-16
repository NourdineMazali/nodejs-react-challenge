import { IUser } from "../interfaces/user";
import { model, Schema } from "mongoose";

/** Mongoose Schema for the colour */
const userSchema: Schema = new Schema(
	{
        username: {
			type: String,
			required: [true, "Username required"],
        },
        email: {
			type: String,
			trim: true,
			lowercase: true,
			unique: true,
			validate: {
				validator: function(v: string) {
					return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
				},
				message: "Please enter a valid email"
			},
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