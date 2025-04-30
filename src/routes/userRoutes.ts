import { Hono } from "hono";
import { createNewUser } from "../controllers/userController";

export const userRoutes = new Hono();
userRoutes.post("/userDetails",  createNewUser);

