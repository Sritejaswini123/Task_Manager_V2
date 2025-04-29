//taskSchema.ts

import { pgTable, serial, text, timestamp, varchar ,integer} from "drizzle-orm/pg-core";
import { userProject } from "./projectSchema";

export const userTasks=pgTable("userTasks",{
    task_id:serial("task_id").primaryKey(),
    title:varchar("title",{length:255}).notNull(),
    project_id:integer("project_id").notNull().references(()=>userProject.id),
    description: text("description"), 
    deadline: timestamp("deadline"),
    status:varchar("status", { length: 50 }).notNull(),
    created_at:timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").notNull(), 
})


