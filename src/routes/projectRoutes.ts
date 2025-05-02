import { Hono } from "hono";
import { createNewProject, getAllProjects, updateProject, deleteProject, getProjectsDetailsById } from "../controllers/projectController";
import { isAuthorized } from "../middlewares/authMiddleware";



const projectRoutes = new Hono();

projectRoutes.post("/saveProject", createNewProject);
projectRoutes.get("/projects", getAllProjects);
projectRoutes.get("/projects/:id", isAuthorized,  getProjectsDetailsById);

projectRoutes.patch("/project/:id", updateProject);
projectRoutes.delete("/project/:id", deleteProject);


export default projectRoutes;