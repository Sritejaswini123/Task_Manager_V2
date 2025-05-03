import { Hono } from "hono";
import { login } from "../controllers/adminController";
import { getProjectParticipant } from "../controllers/projectParticipantsController";



const projectParticipantsRoutes = new Hono();

projectParticipantsRoutes.get('/project-participants/:id',getProjectParticipant);

export default projectParticipantsRoutes;