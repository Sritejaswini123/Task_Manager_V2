import { eq } from "drizzle-orm"
import { db } from "../db/db"
import { users } from "../db/schema/userSchema"



export const getUserDataByEmail=async(email:string)=>{
   const result =  await db.select().from(users).where(eq(users.email,email))
   return  result[0]
}