import express from "express";
import {
  callElevator,
  getElevatorStatus,
} from "../controllers/elevatorController.js";

const router = express.Router();

router.post("/elevator/call", callElevator);
router.get("/elevator/:elevatorId/status", getElevatorStatus);

export default router;
