
import { pgTable, serial, text, timestamp, varchar,integer } from "drizzle-orm/pg-core";
import { users } from "./userSchema";

export const userProject=pgTable("userProjects",{
    id:serial("project_id").primaryKey(),
    title:varchar("title",{length:255}).notNull(),
    description: text("description"), 
    created_by: integer("created_by").notNull().references(()=>users.id),
    status:varchar("status", { length: 50 }).notNull().unique(),
    created_at:timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").notNull() 
})

