// src/controllers/projectController.ts
import { Context } from "hono";
import { getProjectWithTasksService } from "../services/project-taskService";

export const getProjectWithTasks = async (c: Context) => {
  const idParam = c.req.param("projectId");
  const projectId = Number(idParam);
  const data = await getProjectWithTasksService(projectId);
  if (!data) {
    return c.json({ error: "Project not found or has no tasks" }, 404);
  }
  return c.json(data);
};
