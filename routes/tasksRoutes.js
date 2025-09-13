import express from "express";
import { fetchTasks } from "../controllers/taskControllers.js";
import tokenMiddleware from "../middleware/tokenMiddleware.js";

const router = express.Router();

router.get("/", tokenMiddleware, fetchTasks);


export default router;