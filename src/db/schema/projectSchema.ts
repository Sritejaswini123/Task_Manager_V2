
import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

// export const userProject=pgTable("userProjects",{
//     id:serial("project_id").primaryKey(),
//     title:varchar({length:255}).notNull(),
//     description: text(), 
//     created_by: integer().notNull().references(()=>users.id),
//     status:varchar( { length: 50 }).notNull().unique(),
//     created_at:timestamp().defaultNow(),
//     updated_at: varchar().notNull() 
// })


export const userProject=pgTable("user",{
        id:serial("id").primaryKey(),
        name:varchar({length:255}).notNull(),
        status:varchar( { length: 50 }).notNull().unique(),
        created_at:timestamp().defaultNow(),
       
})
