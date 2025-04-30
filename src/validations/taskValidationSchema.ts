import {
    date,
    minLength,
    nonEmpty,
    number,
    object,
    pipe,
    string
} from '@valibot/valibot';
  
  export const userTaskSchemaValidation = object({
    task_id: pipe(
      number()
    ),
  
    title: pipe(
      string(),
      minLength(1, 'Title is required'),
      nonEmpty('Title cannot be empty')
    ),
  
    project_id: pipe(
      number(),
     
    ),
  
    description: pipe(
      string()
    ),
  
    deadline: pipe(
      date()
    ),
  
    status: pipe(
      string(),
      minLength(1, 'status is required'),
      nonEmpty('status cannot be empty')
    ),
  
    created_at: pipe(
      date()
    ),
  
   
  });
  