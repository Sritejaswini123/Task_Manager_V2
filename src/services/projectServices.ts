import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { userProject} from "../db/schema/projectSchema";




// export const addNewProjectToDB=async (body : any )=>{
//     const user=await db.insert(userProject).values({...body , updated_at : new Date()}).returning();
//     return user[0];
// }

export const addNewProjectToDB=async (body : any )=>{
    const project=await db.insert(userProject).values(body).returning();
    return project[0];
}


export const getAllProjectsData=async (projectsDetails: any)=>{
    const projects=await db.select().from(userProject);
    return projects;
}

export const getProjectById=async(id:number)=>{
    const project=await db.select().from(userProject).where(eq(userProject.id,id));
    return project;
}

export const updateProjectData=async(body: any , id : number)=>{
    const project=await db.update(userProject)
    .set({
        title:body.title,
        description:body.description,
        status:body.status,

        updated_at:new Date()
    })
    .where(eq(userProject.id,id))
    .returning();

    return project;
}

export const deleteProjectData=async(id:number)=>{ 
    const project=await db.delete(userProject).where(eq(userProject.id,id)).returning();
    return project;
}

