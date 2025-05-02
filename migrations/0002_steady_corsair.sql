CREATE TABLE "userTasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"project_id" integer NOT NULL,
	"description" text NOT NULL,
	"deadline" timestamp,
	"status" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "userTasks" ADD CONSTRAINT "userTasks_project_id_userProjects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."userProjects"("id") ON DELETE no action ON UPDATE no action;