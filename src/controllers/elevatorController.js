import Elevator from "../models/elevator.model.js";
import { logQuery, moveElevator } from "../utils/elevaltorServices.js";

export const callElevator = async (req, res) => {
  try {
    const { elevatorId, targetFloor } = req.body;
    await logQuery(
      `Call elevator ${elevatorId} to floor ${targetFloor}`,
      "user"
    );

    const elevator = await moveElevator(elevatorId, targetFloor);
    res.json(elevator);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getElevatorStatus = async (req, res) => {
  try {
    const { elevatorId } = req.params;
    await logQuery(`Get status of elevator ${elevatorId}`, "user");

    const elevator = await Elevator.findByPk(elevatorId);
    res.json(elevator);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
