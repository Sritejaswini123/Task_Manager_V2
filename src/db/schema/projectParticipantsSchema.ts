
import { pgTable,integer,serial,varchar, timestamp} from "drizzle-orm/pg-core";
import { users } from "./userSchema";
import { userProject } from "./projectSchema";


export const projectParticipants=pgTable("projectParticipants",{
    id:serial().primaryKey(),
    user_id:integer().notNull().references(()=>users.id),
    project_id:integer().notNull().references(()=>userProject.id),
    role:varchar(),
    joined_at:timestamp().defaultNow(),
})