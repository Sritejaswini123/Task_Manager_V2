import { Context } from "hono";
import { userProjectRelations } from "../services/userProjectRelations.service";



export const userProjectRelation=async(c:Context)=>{
  
    try {
        const userId=Number(c.req.param('id'))
        
        const result=await userProjectRelations(userId);
        return c.json(result,200);
    } catch (error) {
        return c.json({msg:error},400);
    }
}