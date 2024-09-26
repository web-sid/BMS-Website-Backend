import express from "express";
import path from "path";
import cors from "cors";
import { connectDB } from "./config/db.js";
import testimonyRouter from "./routes/testimonyRoute.js";
import resultRouter from "./routes/resultRoute.js";
import coachRouter from "./routes/coachRoute.js";
import recipeRouter from "./routes/recipeRoute.js";

const app = express();
const port = 4000;

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));
// middleware
app.use(express.json());
app.use(cors()); // access backend from frontend

// db connection
connectDB();

app.use("/api/testimony", testimonyRouter);
app.use("/api/results", resultRouter);
app.use("/api/coach", coachRouter);
app.use("/api/health-recipe", recipeRouter);

app.listen(port, () => {
  console.log("Server is running");
});
