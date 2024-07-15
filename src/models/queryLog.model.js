import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const QueryLog = sequelize.define("QueryLog", {
  query: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  executedBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default QueryLog;
