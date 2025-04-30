import type { Context } from "hono";
import { createTask, getAllTasks, getTasksById, updateTasksById, deleteTasksById } from "../services/taskServices";
import { TaskValidation } from "../validations/taskValidation";
import { safeParse } from "valibot";
//create task
export const createNewTask=async(c:Context)=>{
    const body=await c.req.json();
    try {

      const validateTaskData = safeParse(TaskValidation, body);
      if (!validateTaskData.success) {
        throw new Error(validateTaskData .issues[0].message);
      }
        const task=await createTask(body);
        return c.json(task[0],201);
    } catch (error) {
        return c.json({message:"task unable to save",err:error},404);
    }

};
//GET ALL USERS :
export const  getAllTask= async (c: Context) => {
    try {
        const users = await getAllTasks(); 
        return c.json(users,200);
    } catch (error) {
        return c.json({message:"task unable to save",err:error},404);
    }
 
}
//get by id
    export const  getTaskById = async (c: Context) => {
    const id = Number(c.req.param("id")); // convert string to number
    const user = await getTasksById(id);
    if (user.length === 0) {
      return c.json({ error: "User not found" }, 404);
    }
    return c.json(user[0]);
  };
  
// Update user by ID
export const updateTaskById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();
  const updatedUser = await updateTasksById(id, body);
  if (updatedUser.length === 0) {
    return c.json({ error: "User not found" }, 404);
  }
  return c.json(updatedUser[0]);
};
  //Delete by id
 export const deleteTaskById = async (c: Context) => {
    const id = Number(c.req.param("id")); // convert string to number
    const deleted = await deleteTasksById(id);
  if (deleted.length === 0) {
    return c.json({error: "User not found" }, 404);
  }
  return c.json({ user: deleted[0] });
};






  