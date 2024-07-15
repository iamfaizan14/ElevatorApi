import express from "express";
import sequelize from "./database.js";
import Elevator from "./models/elevator.model.js";
import elevatorRoutes from "./routes/elevatorRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get("/test", (req, res) =>
  res.status(200).send({ projectName: "ElevatorApi test" })
);
app.use("/api/v1", elevatorRoutes);

const init = async () => {
  try {
    await sequelize.sync({ force: true });
    await Elevator.bulkCreate([
      { currentFloor: 1 },
      { currentFloor: 1 },
      { currentFloor: 1 },
      { currentFloor: 1 },
      { currentFloor: 1 },
    ]);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Unable to initialize the database:", err);
  }
};

init();

export default app;
