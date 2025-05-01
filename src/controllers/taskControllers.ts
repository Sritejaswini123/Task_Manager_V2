//Controllers
import type { Context } from "hono";
import { createTask,  } from "../services/taskServices";
import { taskValidation } from "../validations/taskValidation";
import { safeParse } from "valibot";
//create task
export const createNewTask=async(c:Context)=>{
 
    try {
        const body=await c.req.json();
      const validateTaskData = safeParse(taskValidation, body);
      if (!validateTaskData.success) {
        throw new Error(validateTaskData .issues[0].message);
      }
        const task=await createTask(body);
        return c.json(task[0],201);
    } catch (error) {
        return c.json({message:"task unable to save",err:error},404);
    }

};