import { Hono } from "hono";
import { getProjectWithTasks } from "../controllers/project-taskController";

export const projectTaskRoute = new Hono();

projectTaskRoute.get("/project-task/:projectId", getProjectWithTasks)