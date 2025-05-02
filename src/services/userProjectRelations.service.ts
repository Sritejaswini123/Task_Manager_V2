import { db } from "../db/db"
import { userProject } from "../db/schema/projectSchema"
import { users } from "../db/schema/userSchema"
import { eq, sql } from "drizzle-orm";





export const userProjectRelations=async(userId:number)=>{
    const result = await db
    .select({
      userId: users.id,
      firstName: users.firstName,
      lastName: users.lastName,
      userProject:userProject.title,
    
    })
    .from(users)
    .innerJoin(userProject, eq(users.id, userProject.created_by))
    // .where(eq(users.id, userId))
    return result;
   
}




























