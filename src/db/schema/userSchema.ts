
 import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),     
  firstName: varchar().notNull(),  
  lastName: varchar().notNull(),    
  userType: varchar() .notNull(),                  
  email: varchar().unique().notNull(), 
  password: varchar().unique().notNull(),  
  address: text(),                        
  status: varchar( { length: 50 }).notNull(),                                      
  createdAt: timestamp().defaultNow(),             
  updatedAt: timestamp(),           
});
