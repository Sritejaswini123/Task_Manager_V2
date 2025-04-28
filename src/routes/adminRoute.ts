import { Hono } from "hono";
import { createNewUser } from "../controllers/adminController.js";

const adminRoute = new Hono();
adminRoute.post("/admin", createNewUser);

export default adminRoute;