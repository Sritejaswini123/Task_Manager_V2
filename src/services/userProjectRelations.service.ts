import { count, eq } from "drizzle-orm";
import { db } from "../db/db";
import { userProject } from "../db/schema/projectSchema";
import { users } from "../db/schema/userSchema";


export const userProjectRelations=async(userId:number)=>{
  const result = await db
  .select({
    projectId: userProject.id,
    title: userProject.title,
    description: userProject.description,
    status: userProject.status,
    createdAt: userProject.created_at,
    createdBy: userProject.created_by,
    updatedAt: userProject.updated_at,
    userFirstName: users.firstName,
    userLastName: users.lastName,
    userEmail: users.email
  })
  .from(userProject)
  .innerJoin(users, eq(userProject.created_by, users.id))
  .where(eq(users.id, userId));

return result;
}


































