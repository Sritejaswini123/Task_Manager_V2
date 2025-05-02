import { minLength,nonEmpty, number,   object,   pipe,  string,} from 'valibot';
  export const projectValidation = object({
  
    title: pipe(
      string(),
      nonEmpty('Title is required'),
      minLength(3, 'Title must be at least 3 characters')
    ),
  
    description: pipe(
      string(),
      nonEmpty('Description is required')
    ),
    created_by: pipe(
      number(),
      
    ),
    status: pipe(
      string(),
      nonEmpty('Status is required'),
      minLength(5, 'Status must be at least 5 characters')
    ),
  });