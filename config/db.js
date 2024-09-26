import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./.env" });

export const connectDB = async () => {
  const DB = process.env.DB_URL;

  await mongoose.connect(DB).then(() => console.log("DB connection done"));
};
