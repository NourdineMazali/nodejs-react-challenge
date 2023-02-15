import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import Colour from "../models/colour";
import request from "supertest";
import express, { Application } from 'express';
import cors from "cors";
import coloursRouter from "../routes/colours";

describe("/colours tests", () => {
  let mongod: MongoMemoryServer;
  let app: Application;
  let id: string;
  let colour;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    await mongoose.connect(uri);
    app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(coloursRouter);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
  });

  beforeEach(async () => {
    colour = new Colour({
      name: "test",
    });
    await colour.save();
    id = colour._id.toString();
  });

  afterEach(async () => {
    await Colour.deleteMany({});
  });

  it("should get colours", async () => {
    const response = await request(app).get("/colours");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      colours: [
        expect.objectContaining({
          _id: id,
          name: "test",
        }),
      ],
    });
  });

    it("should post colours", async () => {
    const response = await request(app).post("/colours").send({
        name: "new test",
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
        colour: expect.objectContaining({
            name: "new test",
        }),
    });
    });

    it("should return errors on post", async () => {
        const response = await request(app).post("/colours").send({
        });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            message: "Validation Error",
        });
    });

    it("should delete colours", async () => {
		const response = await request(app).delete(`/colours/${id}`);
		expect(response.status).toBe(200);
		expect(response.body).toEqual({
			item: expect.objectContaining({
				_id: id,
				name: "test",
			}),
		});
	});
});
