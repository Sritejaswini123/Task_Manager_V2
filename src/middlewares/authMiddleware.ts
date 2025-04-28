import type { Context } from "hono";
import { verifyToken } from "../utils/jwt.js";

// Middleware to verify if the user is an admin
export async function authMiddleware(ctx: Context, next: () => Promise<void>) {
  const authHeader = ctx.req.header("Authorization"); // Correct way to get headers in Hono

  if (!authHeader) {
    return ctx.json({ message: "Unauthorized: No token provided" }, 401);
  }

  const token = authHeader.split(" ")[1]; // Extract token from header

  try {
    const decoded = verifyToken(token); // Decode the token
    if ((decoded as any).role !== "admin") {
      return ctx.json({ message: "Forbidden: Admin access only" }, 403);
    }
    ctx.set("user", decoded); // Proper way to set data to context's state
    await next(); // await next middleware
  } catch (error) {
    return ctx.json({ message: "Unauthorized: Invalid token" }, 401);
  }
}
