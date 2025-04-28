import { Hono } from "hono";
import { addUserToDatabase } from "../services/userService.js";
import type { Context } from "hono";
export const adminController = new Hono();

// Save user
export const createNewUser = async (c: Context) => {
  const { name, email, password } = await c.req.json();
  try {
    const newUser = await addUserToDatabase(name, email, password);
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