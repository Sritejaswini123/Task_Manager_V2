import { Hono } from "hono"
import {object , pipe, string,minLength, email, endsWith,} from "valibot"

export const userValidations = object({
    firstName: pipe(
        string(),
         minLength(3 , "min 3 characters long"),
        ),
    lastName: pipe(
        string(),
        minLength(3 , "max 3 characters long"),
    ),
    email: pipe(
        string(),
        email(), 
        endsWith("@gmail.com")
      ),

      address: pipe(
        string(),
        minLength(3 , "address min 3 characters long"),

      ),   
      userType: pipe(
        string(),
        minLength(3, "user type must be at least 3 characters long")
      ),
      status: pipe(
        string(),
        minLength(3, "status must be at least 3 characters long")
      ) 
})