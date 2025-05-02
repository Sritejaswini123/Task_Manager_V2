import { Hono } from "hono";
import { createNewUser , deleteById} from "../controllers/userController";

export const userRoutes = new Hono();
userRoutes.post("/userDetails",  createNewUser);
userRoutes.delete("/userDetails/:id", deleteById);


