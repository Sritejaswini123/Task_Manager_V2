import { db } from "../db/db";
import { users } from "../db/schema/userSchema";



export const addNewUserToDB=async (body:any)=>{
    const user=await db.insert(users).values(body).returning();
    return user[0];
}


