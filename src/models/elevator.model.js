import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Elevator = sequelize.define("Elevator", {
  currentFloor: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  targetFloor: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    defaultValue: "idle",
  },
  direction: {
    type: DataTypes.STRING,
    defaultValue: "none",
  },
});

export default Elevator;
