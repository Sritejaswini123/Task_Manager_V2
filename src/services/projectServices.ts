import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { userProject } from "../db/schema/projectSchema";




export const addNewProjectToDB=async (body : any )=>{
    const user=await db.insert(userProject).values({...body , updated_at : new Date()}).returning();
    return user[0];
}


export const getAllUsersData=async (projectsDetails: any)=>{
    const user=await db.select().from(userProject);
    return user;
}

export const getById=async(id:number)=>{
    const project=await db.select().from(userProject).where(eq(userProject.id,id));
    return project;
}

export const updateProjectData=async(id: number, data: any)=>{
    const project=await db.update(userProject).set({...data,updated_at:new Date()}).where(eq(userProject.id,id));
    return project;
}

export const deleteProjectData=async(id:number)=>{ 
    const project=await db.delete(userProject).where(eq(userProject.id,id)).returning();
    return project;
}

