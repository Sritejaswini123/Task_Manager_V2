
import { pgTable, serial, text, timestamp, varchar,integer } from "drizzle-orm/pg-core";
import { users } from "./userSchema";

export const userProject=pgTable("userProjects",{
<<<<<<< HEAD

    id:serial("project_id").primaryKey(),
    title:varchar("title",{length:255}).notNull(),
    description: text("description"), 
    created_by:integer().references(()=>users.id),
    status:varchar("status", { length: 255 }).notNull().unique(),
    created_at:timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow().notNull() 
=======
    id:serial("project_id").primaryKey(),
    title:varchar({length:255}).notNull(),
    description: text(), 
    created_by: integer().notNull().references(()=>users.id),
    status:varchar( { length: 50 }).notNull().unique(),
    created_at:timestamp().defaultNow(),
    updated_at: timestamp().notNull() 
>>>>>>> dev2
})

