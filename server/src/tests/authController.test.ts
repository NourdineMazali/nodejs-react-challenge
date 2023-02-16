// import { signup, signin, signout } from '../controllers/auth'
// import employeeService from '../../src/services/employee.service'
// import bcrypt from "bcryptjs";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import User from "../models/user";
import request from "supertest";
import express, { Application } from 'express';
import cors from "cors";
import authRouter from "../routes/auth";
import bcrypt from "bcryptjs";
require('dotenv').config({
  path: '.env'
})

describe("/auth tests", () => {
  let mongod: MongoMemoryServer;
  let app: Application;
  let id: string;
  let user: any;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    await mongoose.connect(uri);
    app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(authRouter);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
  });

  beforeEach(async () => {
    user = new User({
      username: "test",
      password:bcrypt.hashSync("test-password", 8) ,
      email: "test-@test.com",
    });
    await user.save();
    id = user._id.toString();
  });


  afterEach(async () => {
    await User.deleteMany({});
  });

  it("should signup", async () => {

    const response = await request(app).post("/api/v1/auth/signup").send({
        username: "new test",
        password: "new password",
        email: "email@test.com",
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
          message: "User was registered successfully!",
    });
  });

  it("should signin", async () => {
     const response = await request(app).post("/api/v1/auth/signin").send({
      username: "test",
      password: "test-password",
      });
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      email: "test-@test.com",
      id : id,
      username: "test"
});
  });
});