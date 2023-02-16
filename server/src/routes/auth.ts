import * as express from "express";
import { signin, signout, signup } from "../controllers/auth";

// import { authSchema, validateRequest } from "../middleware";
// import { createUserSchema } from "../user/schema";

const authRouter = express.Router();

authRouter
  .post("/api/v1/auth/signup", signup)
  .post("/api/v1/auth/signin", signin)
  .post("/api/v1/auth/signout", signout);

export default authRouter;