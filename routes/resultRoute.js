import express from "express";
import { getAllResults } from "../controllers/resultsController.js";

const resultRouter = express.Router();

resultRouter.get("/list", getAllResults);

export default resultRouter;
