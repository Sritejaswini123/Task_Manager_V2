import { eq } from "drizzle-orm";
import { users } from "../db/schema/userSchema";
import { db } from "../db/db";
import { projectParticipants } from "../db/schema/projectParticipantsSchema";


export const getProjectParticipants=async(id:number)=>{

const result=await db.select({
    id: users.id,
    firstName: users.firstName,
    lastName: users.lastName,
    email: users.email,
    role: projectParticipants.role,
    joinedAt: projectParticipants.joined_at,
    })
    .from(projectParticipants)
    .innerJoin(users,eq(users.id,projectParticipants.user_id))
    .where(eq(projectParticipants.project_id,id))
    return result;
}