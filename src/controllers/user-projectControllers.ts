// src/controllers/userController.ts
import { db } from "../db/db";
import { users } from "../db/schema/userSchema";
import { userProject } from "../db/schema/projectSchema";
import { eq } from "drizzle-orm";
import { Context } from "hono";

export const getUserWithProjects = async (c: Context) => {
  const userId = Number(c.req.param("id"));
  
  const rows = await db
    .select({
      userId: users.id,
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
      projectId: userProject.id,
      title: userProject.title,
      description: userProject.description,
      status: userProject.status,
    })
    .from(users)
    .innerJoin(userProject, eq(users.id, userProject.created_by))
    .where(eq(users.id, userId));

  if (rows.length === 0) {
    return c.json({ error: "User not found or no projects assigned" }, 404);
  }

  const { userId: id, firstName, lastName, email } = rows[0];
  const projects = rows.map((r) => ({
    projectId: r.projectId,
    title: r.title,
    description: r.description,
    status: r.status,
  }));

  return c.json({
    id,
    firstName,
    lastName,
    email,
    projects,
  });
};
