import { Context } from "hono";
import { userProjectRelations } from "../services/userProjectRelations.service";



export const userProjectRelation=async(c:Context)=>{
    try {
        const result=await userProjectRelations();
        return c.json(result,200);
    } catch (error) {
        return c.json({msg:error},400);
    }
}