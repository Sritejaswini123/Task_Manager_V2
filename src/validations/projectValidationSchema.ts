import { nonEmpty, optional, optionalAsync } from "@valibot/valibot";
import {
  minLength,
  number,
  object,
  pipe,
  string,
} from 'valibot';

import type { InferOutput } from 'valibot';

export const projectSchemaValidation = object({

  title: pipe(
    string(),
    nonEmpty('Title is required'),
    minLength(3, 'Title must be at least 3 characters')
  ),

  description: pipe(
    string(),
    nonEmpty('Description is required')
  ),

  created_by:number(),

  status: pipe(
    string(),
    nonEmpty('Status is required'),
    minLength(5, 'Status must be at least 5 characters')
  ),
});

export type ValidateProject = InferOutput<typeof projectSchemaValidation>
