// utils/validation.ts

import { object, pipe, string, email, minLength } from "valibot";

export const userValidationSchema = object({
  email: pipe(
    string(),
    email("@gmail.com") // built-in email validation
  ),
  password: pipe(
    string(),
    minLength(8, "Password must be at least 8 characters long")
  ),
  username: pipe(
    string(),
    minLength(3, "Username must be at least 3 characters long")
  ),
});
