import {
    date,
    minLength,
    nonEmpty,
    number,
    object,
    pipe,
    string
} from "valibot";
  
  export const projectSchemaValidation = object({
    id: pipe(
        number(),
    ),
  
    title: pipe(
      string(),
     
    ),
  
    description: pipe(
      string()
    ),
  
    created_by: pipe(
      string(),
     
    ),
  
    status: pipe(
      string(),
      minLength(20,'status i required'),
      nonEmpty()
    ),
  
    created_at: pipe(
      date()
    )
  });
  