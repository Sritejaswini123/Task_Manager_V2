import { safeParse } from "@valibot/valibot";
import { Context } from "hono";
import { addNewProject } from "../services/projectServices";
import { projectValidation } from "../validations/projectValidation";



//save new project
export const  createNewProject=async(c:Context)=>{
    
    try {
        const projectData=await c.req.json();
        console.log(projectData);
        const validatedProjectData=safeParse(projectValidation,projectData)
        console.log("validatedpROJECT",validatedProjectData);
        if(!validatedProjectData.success){
            throw new Error(validatedProjectData.issues[0].message)
        }
        console.log('====================================');
        console.log("hello");
        
        console.log('====================================');
        const project=await addNewProject(validatedProjectData.output);
        return c.json({project},201);
    } catch (error) {
        console.log(error);
        return c.json({msg:error},500);
    }
    
    }
    