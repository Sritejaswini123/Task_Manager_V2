import { db } from "../db/db"
import { userProject } from "../db/schema/projectSchema"
import { users } from "../db/schema/userSchema"
import { eq } from "drizzle-orm";





export const userProjectRelations=async()=>{
    const result =await db.select()
    .from(users)
    .innerJoin(userProject,eq(users.id,userProject.created_by))
    // .where(eq(userProjects.created_by,users.id));
    return result;
}




























