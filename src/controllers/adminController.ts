import { Context, Hono } from "hono";
import { addNewUserToDB } from "../services/userService";

export const adminController = new Hono();



export const createNewUser=async (c:Context)=>{
  const body= await c.req.json();
  try {
    const user=await addNewUserToDB(body);
    return c.json(user,201);
  } catch (error) {
    return c.json({message:error},400);
  }

}