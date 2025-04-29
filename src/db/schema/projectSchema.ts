
import { pgTable, serial, text, timestamp, varchar,integer } from "drizzle-orm/pg-core";

export const userProject=pgTable("userProjects",{

    project_id:serial("project_id").primaryKey(),

    title:varchar("title",{length:255}).notNull(),

    description: text("description"), 

    created_by:integer(),

    status:varchar("status", { length: 255 }).notNull().unique(),

    created_at:timestamp("created_at").defaultNow(),

    updated_at: timestamp("updated_at").defaultNow().notNull() 
})

