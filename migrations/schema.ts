import { pgTable, unique, serial, varchar, timestamp, text, foreignKey, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	id: serial().primaryKey().notNull(),
	email: varchar({ length: 255 }).notNull(),
	password: varchar().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	address: text().notNull(),
	status: varchar().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	firstName: varchar({ length: 255 }).notNull(),
	lastName: varchar({ length: 255 }).notNull(),
	userType: varchar({ length: 255 }).notNull(),
}, (table) => [
	unique("users_email_unique").on(table.email),
]);

export const userProjects = pgTable("userProjects", {
	projectId: serial("project_id").primaryKey().notNull(),
	title: varchar({ length: 255 }).notNull(),
	description: text(),
	createdBy: integer("created_by").notNull(),
	status: varchar({ length: 50 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.createdBy],
			foreignColumns: [users.id],
			name: "userProjects_created_by_users_id_fk"
		}),
	unique("userProjects_status_unique").on(table.status),
]);
