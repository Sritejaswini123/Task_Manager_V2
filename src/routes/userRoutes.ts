import { Hono } from "hono";
import { createNewUser } from "../controllers/userController";



const userRoutes = new Hono();

userRoutes.post("/saveUser", createNewUser);



export default userRoutes;