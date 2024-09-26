import express from "express";
import { getAllCoaches } from "../controllers/coachController.js";

const coachRouter = express.Router();

coachRouter.get("/team", getAllCoaches);

export default coachRouter;
