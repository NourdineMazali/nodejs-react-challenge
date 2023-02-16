import { Request, Response } from "express";
import User from "../models/user";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { IUser } from "../interfaces/user";
import { statusCodes } from "../utils/statusCodes";
import mongoose from "mongoose";

const signup = async (req: Request, res: Response): Promise<void> => {

	try {
		const body = req.body as Pick<IUser, "username" | "email" | "password">;
    if (!body.username || !body.password || !body.email) {
      throw new Error("Please enter all fields");
    }
		const user: IUser = new User({
			username: body.username,
      email: body.email,
      password: bcrypt.hashSync(body.password, 8),
		});

		await user.save();

    res.status(statusCodes.SUCCESS).send({ message: "User was registered successfully!" });

	} catch (err) {
		if (err instanceof mongoose.Error.ValidationError) {
			res.status(statusCodes.BAD_REQUEST).json({
				message: err.message,
			});
		} else {
			res.status(statusCodes.SERVER_ERROR).json({
				message: "Internal server Error",
			});
		}
	}
};

const signin = async (req: Request, res: Response): Promise<void> => {

    User.findOne({
        username: req.body.username,
    }).exec((err, user) => {
    if (err) {
      res.status(statusCodes.SERVER_ERROR).send({ message: err });
      return;
    }

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid Password!" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: 86400, // 24 hours
    });

    // req.session!.token = token;

    res.status(statusCodes.SUCCESS).send({
      id: user._id,
      username: user.username,
      email: user.email,
      token: token,
    });
  });
};

const signout = async (req: Request, res: Response): Promise<void> => {
  try {
    req.session.destroy((err) => {
        if (err) {
            // Failed to access session storage to delete session data
            res.status(statusCodes.SERVER_ERROR).json({
                message: err
            });
        }
    });
    res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    res.status(statusCodes.SERVER_ERROR).json({
        message: err
    });
  }
};

export { signup, signin, signout };
