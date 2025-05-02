// project_users.ts
import { pgTable, serial, integer,timestamp } from "drizzle-orm/pg-core";
import { users } from "./userSchema";
import { userProject } from "./projectSchema";

export const projectUsers = pgTable('project_users', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id),
    projectId: integer('project_id').references(() => userProject.id),
    assignedAt: timestamp('assigned_at').defaultNow(),
  });