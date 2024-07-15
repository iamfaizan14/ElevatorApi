import request from "supertest";
import app from "../src/app.js";
import sequelize from "../src/database.js";
import Elevator from "../src/models/elevator.model.js";

beforeAll(async () => {
  // Synchronize the database and create test data
  await sequelize.sync({ force: true });
  await Elevator.bulkCreate([
    { currentFloor: 1 },
    { currentFloor: 1 },
    { currentFloor: 1 },
    { currentFloor: 1 },
    { currentFloor: 1 },
  ]);
});

afterAll(async () => {
  // Close the database connection after all tests
  await sequelize.close();
});

describe("Elevator API", () => {
  it("should call the elevator", async () => {
    const res = await request(app).post("/api/elevator/call").send({
      elevatorId: 1,
      targetFloor: 5,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("currentFloor");
  });

  it("should get elevator status", async () => {
    const res = await request(app).get("/api/elevator/1/status");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("currentFloor");
  });
});
