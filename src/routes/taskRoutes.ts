import { Hono } from "hono";
import { createNewTask, getAllTask, getTaskById, updateTaskById, deleteTaskById } from "../controllers/taskControllers";

export const taskRoutes = new Hono();
taskRoutes.post("/", createNewTask);
taskRoutes.get("/", getAllTask);
taskRoutes.get("/:id", getTaskById);
taskRoutes.patch("/:id", updateTaskById);
taskRoutes.delete("/:id", deleteTaskById);