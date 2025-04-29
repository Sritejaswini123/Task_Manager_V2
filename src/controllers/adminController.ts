import { Hono } from "hono";
import { addNewUserToDB} from "../services/userService.js";
import type { Context } from "hono";
export const adminController = new Hono();

console.log("entering to adiminController");

// Save user
export const createNewUser = async (c: Context) => {
 const body= await c.req.json();
  try {
    const newUser = await addNewUserToDB(body);
    console.log(newUser);
    return c.json(
      {
        message: "User added successfully",
        newUser,
      },
      201
    );
  } catch (error) {
    return c.json(
      {
        error: "Failed to add user",
        details: error,
      },
      400
    );
  }
};