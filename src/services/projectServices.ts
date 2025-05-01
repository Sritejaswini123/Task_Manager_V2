//ProjectServices
import { db } from "../db/db.js";
import { userProject } from "../db/schema/projectSchema.js";


//Creating the user
export const addNewProject=async (body:any)=>{
    console.log(body);
    const user= await db.insert(userProject).values(body).returning();
    return user[0];
}

