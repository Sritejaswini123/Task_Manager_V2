import { nonEmpty } from "@valibot/valibot"
import {object , pipe, string,minLength, email, endsWith,} from "valibot"

export const userDetailsValidations = object({
    firstName: pipe(

        string(),
         minLength(3 , "First Name must be at least 3 characters long"),
        
        ),
    lastName: pipe(
        string(),
        minLength(3 , "Last Name must be at least 3 characters long"),

    ),
    email: pipe(
        string(),
        email(), // built-in email validation
        endsWith("@gmail.com")
      ),

      address: pipe(
        string(),
        minLength(3 , "Address must be at least 3 characters long"),

      ),
      status: pipe(
        string(),
      ),

    
})