import { safeParse } from "@valibot/valibot";
import { db } from "../db/db";
import { users } from "../db/schema/userSchema";
import { userSchemaValidations } from "../validations/UsersValidationSchema";



export const addNewUserToDB=async (body:object)=>{

 

  // const user=await db.insert(users).values().returning();
  // return user;
}