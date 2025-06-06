import bcrypt from "bcryptjs";
import { db } from "../db/db.js";
import { users } from "../db/schema/userSchema.js";
import { userValidationSchema } from "../utils/validation.js";
import { safeParse } from "valibot"; // <<< Import this!

// Function to add user to the database
export async function addUserToDatabase(email: string, password: string, username: string) {
  // Validate input data
  const validationResult = safeParse(userValidationSchema, { email, password, username });
  if (!validationResult.success) {
    throw new Error("Invalid input data");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user data into the database
  const newUser = await db.insert(users).values({
    email,
    password: hashedPassword, // Store the hashed password
    username,
    role: "user", // Default user role
  }).returning();

  return newUser[0]; // Return the inserted user
}