import { Hono } from "hono";
import { login } from "../controllers/adminController";



const loginRoutes = new Hono();

loginRoutes.post('/login',login);

export default loginRoutes;