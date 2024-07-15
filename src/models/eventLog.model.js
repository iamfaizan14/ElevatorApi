import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const EventLog = sequelize.define("EventLog", {
  eventType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default EventLog;
