import { Context, Hono } from "hono";
import { addNewUserToDB } from "../services/userService";
import { safeParse } from "valibot";
import { userSchemaValidations } from "../validations/usersValidationSchema";
export const adminController = new Hono();



export const createNewUser=async (c:Context)=>{
  const userData= await c.req.json(); 
  try {

    const validateuserData = safeParse(userSchemaValidations , userData)

    if(!validateuserData.success){
      throw new Error(validateuserData.issues[0].message)
    }

    const user=await addNewUserToDB(validateuserData);
    return c.json({user},201);
  } catch (error : any ) {
    return c.json({message:error.message},400);
  }

}