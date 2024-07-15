import Elevator from "../models/elevator.model.js";
import EventLog from "../models/eventLog.model.js";
import QueryLog from "../models/queryLog.model.js";

export const moveElevator = async (elevatorId, targetFloor) => {
  const elevator = await Elevator.findByPk(elevatorId);
  if (!elevator) throw new Error("Elevator not found");

  const direction = targetFloor > elevator.currentFloor ? "up" : "down";
  const moveTime = Math.abs(targetFloor - elevator.currentFloor) * 5000;

  elevator.state = "moving";
  elevator.direction = direction;
  elevator.targetFloor = targetFloor;
  await elevator.save();

  await logEvent(
    `Elevator ${elevatorId} started moving ${direction} to floor ${targetFloor}`
  );

  setTimeout(async () => {
    elevator.currentFloor = targetFloor;
    elevator.state = "idle";
    elevator.direction = "none";
    elevator.targetFloor = null;
    await elevator.save();

    await logEvent(`Elevator ${elevatorId} reached floor ${targetFloor}`);
  }, moveTime);

  return elevator;
};

export const logEvent = async (description) => {
  await EventLog.create({ eventType: "movement", description });
};

export const logQuery = async (query, executedBy) => {
  await QueryLog.create({ query, executedBy });
};
