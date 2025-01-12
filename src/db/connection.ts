// src/index.ts

// import { Sequelize } from "sequelize-typescript";
import { Sequelize } from "sequelize-typescript/dist";
import User from "../models/user";
require('dotenv').config() ;


const sequelize = new Sequelize({
  dialect: "mysql",
  database: "CloudShare",
  username: "postgres",
  password: "Ashutosh@123",
  models: [User]
});

console.log("Database initialized.");

export default sequelize ; 