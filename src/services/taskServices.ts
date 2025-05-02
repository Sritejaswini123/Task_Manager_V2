//taskServices
import { db } from "../db/db.js";
import { userTasks } from "../db/schema/taskSchema.js";
import { eq } from "drizzle-orm";

//create task
export const createTask=async (body:any)=>{
const user=await db.insert(userTasks).values(body).returning();
return user[0];
}

//get all tasks
//get all
export const getAllTasks = async() => {
    return await db.select().from(userTasks);
}

//get task by id
export const getTasksById = async(id:number) => {
    return await db.select().from(userTasks).where(eq(userTasks.id,id));
}
//delete
//For deleting user by id
export const deleteTasksById = async(id: number) => {
    return await db.delete(userTasks).where(eq(userTasks.id, id)).returning()
}

//update
export const updateTaskData=async(body: any , id : number)=>{
    const project=await db.update(userTasks)
    .set({ //.set() provides the new values to update in the table.These values will replace the current values for the matched task in the database.
        title:body.title,
        description:body.description,
        status:body.status,
       
    })
    .where(eq(userTasks.id,id)) //This is the filter condition, telling Drizzle to only update the row where task_id === id.
    .returning();

    return project;
}
