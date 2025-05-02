//Controllers
import type { Context } from "hono";
import { createTask, getAllTasks , getTasksById, deleteTasksById,updateTaskData} from "../services/taskServices";
import { taskValidation } from "../validations/taskValidation";
import { safeParse } from "valibot";
//create task
export const createNewTask=async(c:Context)=>{
    try {
        const body=await c.req.json();
      const validateTaskData = safeParse(taskValidation, body);
      console.log("->",validateTaskData);
      if (!validateTaskData.success) {
        return c.json(
            {
             message:   validateTaskData .issues[0].message
            }
        );
      }
        const task=await createTask(validateTaskData.output);
        console.log("->",task);
        return c.json(task,201)
    } catch (error) {
        return c.json({message:"task unable to create",err:error},404);
    }

};
//get all tasks
export const  getAllTask= async (c: Context) => {
    try {
        const users = await getAllTasks(); 
        return c.json(users,200);
    } catch (error) {
        return c.json({message:"unable to get all task data ",err:error},404);
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
    //Delete by id
 export const deleteTaskById = async (c: Context) => {
    const id = Number(c.req.param("id")); // convert string to number
    const deleted = await deleteTasksById(id);
  if (deleted.length === 0) {
    return c.json({error: "User not found" }, 404);
  }
  return c.json({ user: "task is deleted" });
};

//update by id
export const updateTask=async(c:Context)=>{
    try {
        const taskData=await c.req.json();
        const id=Number(c.req.param('id'));
        const validatedProjectData=safeParse(taskValidation,taskData)
       
        if(!validatedProjectData.success){
            return c.json({
                message : validatedProjectData.issues[0].message
            })
        }
        const gettasksData=await updateTaskData(taskData, id);
        // console.log(getProjectsData);
        console.log("updated done");
        return c.json(gettasksData,200);
    } catch (error) {
        return c.json({msg:error},400);
    }
}
