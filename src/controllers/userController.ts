//userControllers

import { Hono } from "hono";
import type { Context } from "hono";
import { addNewUserToDB } from "../services/userServices";
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