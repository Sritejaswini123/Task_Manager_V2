//Admin Schema 
// drizzle/schema/user.ts

import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const admin = pgTable("admin", {
  id: serial("id").primaryKey(),
  email: varchar( { length: 255 }).unique().notNull(),
  password: varchar( { length: 255 }).notNull(),
  username: varchar( { length: 255 }).notNull(),
  role: text().default("admin").notNull(), // Default role "admin"
  createdAt: timestamp().defaultNow(),
});
