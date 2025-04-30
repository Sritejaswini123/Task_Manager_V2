import { relations } from "drizzle-orm/relations";
import { users, userProjects } from "./schema";

export const userProjectsRelations = relations(userProjects, ({one}) => ({
	user: one(users, {
		fields: [userProjects.createdBy],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	userProjects: many(userProjects),
}));