import { Hono } from "hono";
import { getUserWithProjects } from "../controllers/user-projectControllers";

export const userProjectRoutes = new Hono();

userProjectRoutes.get("/userwithprojects/:id/", getUserWithProjects); // Get all users with their projects