// drizzle/schema/user.ts

import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  username: varchar("username", { length: 255 }).notNull(),
  role: text("role").default("admin").notNull(), // Default role "admin"
  createdAt: timestamp("created_at").defaultNow(),
});
