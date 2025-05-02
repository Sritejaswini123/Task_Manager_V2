import { Context } from "hono";
import { verify } from "hono/jwt";

export const isAuthorized = async (c:Context, next:any )=>{

        const token = c.req.header("Authorization");
        const verifyInfo = await verify(token! , "shivaji180397")
        console.log("verifyInfo" , verifyInfo)
        if(false){
          return c.json({
            message : "LoggIn first"
          })
        }
        return await  next()
}