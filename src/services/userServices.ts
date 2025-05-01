//userServices
import { db } from "../db/db.js";
import { users } from "../db/schema/userSchema.js";


//Creating the user
export const addNewUserToDB=async (body: any)=>{
  const user=await db.insert(users).values(body).returning();
  return user[0];
}


 
