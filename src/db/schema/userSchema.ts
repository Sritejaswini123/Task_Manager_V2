//userSchema

import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";
export const users = pgTable("users", {
  id: serial().primaryKey(),     
  firstName: varchar({ length: 255 }).notNull(),  
  lastName: varchar({ length: 255 }).notNull(),    
  userType: varchar( { length: 255 }) .notNull(),                  
  email: varchar( { length: 255 }).unique().notNull(),  
  address: text().notNull(),                         
  status: varchar().notNull(),                                      
  createdAt: timestamp().defaultNow(),             
  updatedAt: timestamp(),          
});