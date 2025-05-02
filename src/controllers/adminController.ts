import { sign } from "hono/jwt";
import { addNewUserToDB } from "../services/userServices";
import { Context } from "hono";
import { Hono } from "hono";
import { safeParse } from "valibot";
import { vLoginSchema } from "../validations/vLoginSchema";
import { getUserDataByEmail } from "../validations/dbServices";

export const adminController = new Hono();

// console.log("entering to adiminController");

// Save user
export const createNewUser = async (c: Context) => {

  try {
    const userDetails= await c.req.json();
    const newUser = await addNewUserToDB(userDetails);
    console.log(newUser);
    return c.json(
      {
        message: "User added successfully",
        newUser,
      },
      201
    );
  } catch (error) {
    return c.json(
      {
        error: "Failed to add user",
        details: error,
      },
      400
    );
  }
};

export const login = async (c : Context)=>{
        const loginData = await c.req.json();
        const validateLoginData = safeParse(vLoginSchema , loginData)
        // console.log("validated data: ",validateLoginData);

        const { email , password } = validateLoginData.output as { email : string , password : string} ;
        const userDetails = await getUserDataByEmail(email) ;
        if(!userDetails){
            return c.json({
              message : "please create account first"
            })
        }

       if(userDetails.password !== password){ 
            return c.json({
              message : "password  is mismatched"
            })    
       }

      const token = await sign({ email : userDetails.email } , "shivaji180397")

       return c.json({
        message : "LoggedIn successfully" , 
        token 
      })

       
}   


