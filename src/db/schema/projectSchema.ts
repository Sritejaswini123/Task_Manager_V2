//projecrtSchema.ts
import { pgTable, serial, text, timestamp, varchar,integer } from "drizzle-orm/pg-core";
import { users } from "./userSchema";

    export const userProject=pgTable("userProjects",{
        id:serial().primaryKey(),
        title:varchar().notNull(),
        description: text(), 
        created_by: integer().notNull().references(()=>users.id),
        status:varchar().notNull(),
        created_at:timestamp().defaultNow(),    
        updated_at: timestamp()
    })

