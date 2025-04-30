import { safeParse } from "@valibot/valibot";
import { Context } from "hono";
import { addNewProjectToDB, deleteProjectData, getAllUsersData, getById, updateProjectData } from "../services/projectServices";
import { projectSchemaValidation } from "../validations/projectValidationSchema";


//save new project

export const  createNewProject=async(c:Context)=>{
const projectData=await c.req.json();
console.log(projectData);
try {
    // const projectsDetails=safeParse(projectSchemaValidation,projectData)
    // console.log(projectsDetails);
    // if(!projectsDetails.success){
    //     throw new Error(projectsDetails.issues[0].message)
    // }
    // const project=await addNewProjectToDB(projectsDetails.output);
    return c.json({projectData},201);
} catch (error) {
    return c.json({msg:error},400);
}

}


//get all projects
export const getAllProjects=async(c:Context)=>{

    try {
       const projectsDetails=await c.req.json();
        const getProjectsData=await getAllUsersData(projectsDetails);
        return c.json(getProjectsData,200);
    } catch (error) {
        return c.json({msg:error},400);
    }
}

export const getAllProjectsById=async(c:Context)=>{
    const paramId=Number(c.req.param('id'));
    try {
     
        const getProjectsData=await getById(paramId);
        return c.json(getProjectsData,200);
    } catch (error) {
        return c.json({msg:error},400);
    }
}



export const updateProject = async (c: Context) => {
    const id = Number(c.req.param('id'));
    const projectData = await c.req.json();
  
    try {
      const updated = await updateProjectData(id, projectData);
      return c.json(updated, 200);
    } catch (error) {
      return c.json({ msg: error }, 400);
    }
  };
  


//delete project

export const deleteProject=async(c:Context)=>{
    const id=Number(c.req.param('id'));
    
    try {
       
        const project=await deleteProjectData(id);
        return c.json(project,200);
    } catch (error) {
        return c.json({msg:error},400);
    }

}