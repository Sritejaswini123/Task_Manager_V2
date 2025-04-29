
import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),     

  firstName: varchar("first_name", { length: 255 }).notNull(),  
  lastName: varchar("last_name", { length: 255 }).notNull(),    
  userType: varchar("user_type", { length: 255 }) .notNull(),                  
  email: varchar("email", { length: 255 }).unique().notNull(),  
  password : varchar("password").notNull(),
  address: text("address").notNull(),                         
  status: varchar("status", { length: 50 }).notNull(),                                      
  createdAt: timestamp("created_at").defaultNow(),             
  updatedAt: timestamp("updated_at"),           
});