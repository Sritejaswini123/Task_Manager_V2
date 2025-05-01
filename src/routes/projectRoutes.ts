import { Hono } from "hono";
import { createNewProject } from "../controllers/projectController";

const projectRoutes = new Hono();

projectRoutes.post("/saveProjects", createNewProject);

export default projectRoutes;