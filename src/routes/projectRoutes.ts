import { Hono } from "hono";
import { createNewProject, deleteProject, getAllProjects, getAllProjectsById, updateProject } from "../controllers/projectControllers";



const projectRoutes = new Hono();

projectRoutes.post("/save", createNewProject);
projectRoutes.get("/projects", getAllProjects);
projectRoutes.get("/projects/:id", getAllProjectsById);
projectRoutes.patch("/project/:id", updateProject);
projectRoutes.delete("/project/:id", deleteProject);


export default projectRoutes;