import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "elevator.sqlite",
  logging: false,
});

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to database successfully.");
  } catch (error) {
    console.error("Error while connecting database:", err);
  }
};

connectToDB();

export default sequelize;
