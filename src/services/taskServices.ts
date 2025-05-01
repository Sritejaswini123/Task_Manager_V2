//taskServices
import { db } from "../db/db.js";
import { userTasks } from "../db/schema/taskSchema.js";


//create task
export const createTask=async (body:any)=>{
const user=await db.insert(userTasks).values(body).returning();
return user;
}