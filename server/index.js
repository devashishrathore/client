import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT || 8080;
const DATABASE_URL = process.env.CONNECTION_URL;

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(DATABASE_URL)
  .then(() => console.log("Connected to DataBase"))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
