//userServices
import { db } from "../db/db.js";
import { users } from "../db/schema/userSchema.js";
import { eq } from "drizzle-orm";

//Creating the user
export const addNewUserToDB=async (body: any)=>{
  const user=await db.insert(users).values(body).returning();
  return user[0];
}

//delete the user
//For deleting user by id
export const deleteUserById = async(id: number) => {
  return await db.delete(users).where(eq(users.id, id)).returning()
}

