import { pgTable, serial, text, timestamp, varchar ,integer} from "drizzle-orm/pg-core";
import { userProject } from "./projectSchema";

export const userTasks =pgTable("userTasks",{
    task_id:serial().primaryKey(),
    title:varchar().notNull(),
    project_id:integer().notNull().references(()=>userProject.id),
    description: text().notNull(),
    deadline: timestamp(),
    status:varchar().notNull(),
    created_at:timestamp().defaultNow(),
    updated_at: timestamp()
})