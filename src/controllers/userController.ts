//userControllers

import { Hono } from "hono";
import type { Context } from "hono";
import { addNewUserToDB, deleteUserById } from "../services/userServices";
import { safeParse } from "valibot";
import { userValidations } from "../validations/userValidations";


export const createNewUser = async (c: Context) => {
    const body = await c.req.json();
    try{
        const validateUserdata = safeParse(userValidations, body);
      if (!validateUserdata.success) {
        throw new Error(validateUserdata .issues[0].message);
      }
        const Newdetails=await addNewUserToDB(body);
        return c.json(Newdetails,201);
    } catch (error) {
        return c.json({message:"user unable to save",err:error},404);
    }

    }

    //delete user
      //Delete by id
 export const deleteById = async (c: Context) => {
  const id = Number(c.req.param("id")); // convert string to number
  const deleted = await deleteUserById(id);
if (deleted.length === 0) {
  return c.json({error: "User not found" }, 404);
}
return c.json({ user: "user is successfully deleted" });
};
