import { db } from "../db/db";
import { userProject } from "../db/schema/projectSchema";
import { userTasks } from "../db/schema/taskSchema";
import { eq } from "drizzle-orm";
//Get the list of tasks for a particular user

export const getProjectWithTasksService = async (projectId: number) => {
    const rows = await db
      .select({
        projectId: userProject.id,
        projectTitle: userProject.title,
        projectDescription: userProject.description,
        taskId: userTasks.id,
        taskTitle: userTasks.title,
        taskDescription: userTasks.description,
        taskDeadline: userTasks.deadline,
        taskStatus: userTasks.status,
      })
      .from(userProject)
      .innerJoin(userTasks, eq(userProject.id, userTasks.project_id))
      .where(eq(userProject.id, projectId));
  
    if (rows.length === 0) return null;
  
    const { projectId: id, projectTitle, projectDescription } = rows[0];
  
    const tasks = rows.map((row) => ({
      id: row.taskId,
      title: row.taskTitle,
      description: row.taskDescription,
      deadline: row.taskDeadline,
      status: row.taskStatus,
    }));
  
    return {
      id,
      title: projectTitle,
      description: projectDescription,
      tasks,
    };
  };