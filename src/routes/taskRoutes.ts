//taskRoutes
import { Hono } from "hono";
import { createNewTask } from "../controllers/taskControllers";

export const taskRoutes = new Hono();
taskRoutes.post("/task", createNewTask);