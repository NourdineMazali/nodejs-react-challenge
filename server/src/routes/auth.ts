import * as express from "express";
import { signin, signout, signup } from "../controllers/auth";

// import { authSchema, validateRequest } from "../middleware";
// import { createUserSchema } from "../user/schema";

const authRouter = express.Router();

authRouter
  .post("/signup", signup)
  .post("/signin", signin)
  .post("/signout", signout);

export default authRouter;