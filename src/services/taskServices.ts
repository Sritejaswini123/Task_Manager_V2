import { db } from "../db/db.js";
import { userTasks } from "../db/schema/taskSchema.js";
import { eq } from "drizzle-orm";

//create task
export const createTask=async (body:any)=>{
const user=await db.insert(userTasks).values(body).returning();
return user;
}

//get all
export const getAllTasks = async() => {
    return await db.select().from(userTasks);
}

//get users by id
export const getTasksById = async(id:number) => {
    return await db.select().from(userTasks).where(eq(userTasks.task_id,id));
}

//For updating user by id
export const updateTasksById = async(id: number, userData: any) => {
    return await db.update(userTasks).set(userData).where(eq(userTasks.task_id, id)).returning();

}
//For deleting user by id
export const deleteTasksById = async(id: number) => {
    return await db.delete(userTasks).where(eq(userTasks.task_id, id)).returning()
}




    
    
    
    