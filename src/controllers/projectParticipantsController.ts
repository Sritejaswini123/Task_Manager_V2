import { Context } from "hono";
import { getProjectParticipants } from "../services/projectParticipants.service";

export const getProjectParticipant=async(c:Context)=>{
  
    try {
        const userId=Number(c.req.param('id'))
        
        const result=await getProjectParticipants(userId);
        return c.json(result,200);
    } catch (error) {
        return c.json({msg:error},400);
    }
}