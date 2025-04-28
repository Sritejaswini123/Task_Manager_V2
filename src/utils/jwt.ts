// utils/jwt.ts

import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET_KEY as string;
//error case
if (!SECRET_KEY) {
    throw new Error("JWT_SECRET_KEY is not defined in environment variables.");
  }
else {
    console.log("JWT_SECRET_KEY is generated ");
}
// Function to generate a JWT token
export function generateToken(payload: object) {
  return jwt.sign(payload, SECRET_KEY, {expiresIn: "1h",
    issuer: "taskmanager-api",     // Who issued the token
    audience: "taskmanager-users", // Who the token is for
   } );
  //
}

// Function to verify a JWT token
export function verifyToken(token: string) {
  return jwt.verify(token, SECRET_KEY);
}

// ---------------------------
// Test code - Generate a sample token
const samplePayload = { id: 1, name: "Test User" };
const token = generateToken(samplePayload);
console.log("Generated JWT Token:");
console.log(token);