import express from "express";
import { getAllTestimony } from "../controllers/testimonyController.js";

const testimonyRouter = express.Router();

testimonyRouter.get("/list", getAllTestimony);

export default testimonyRouter;
