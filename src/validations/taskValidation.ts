import {object ,pipe , string, nonEmpty, minLength, number} from "valibot"
export const taskValidation = object({

    title: pipe(
        string(),
        nonEmpty('Title is required'),
        minLength(3, 'Title must be at least 3 characters')
      ),
      description: pipe(
        string(),
        nonEmpty('Description is required')
      ),
      status: pipe(
        string(),
        nonEmpty('Status is required'),
        minLength(5, 'Status must be at least 5 characters')
      ),
      project_id: number('Project ID must be a number')
})