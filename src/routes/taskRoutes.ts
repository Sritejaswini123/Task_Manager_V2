//taskRoutes
import { Hono } from "hono";
import { createNewTask, getAllTask, getTaskById , deleteTaskById, updateTask} from "../controllers/taskControllers";

export const taskRoutes = new Hono();
taskRoutes.post("/task", createNewTask);
taskRoutes.get("/alltask", getAllTask);
taskRoutes.get("task/:id", getTaskById);
taskRoutes.delete("/task/:id", deleteTaskById);
taskRoutes.put("/task/:id", updateTask);