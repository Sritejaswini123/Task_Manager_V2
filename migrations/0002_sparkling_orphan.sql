CREATE TABLE "userProjects" (
	"project_id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"created_by" integer,
	"status" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "userProjects_status_unique" UNIQUE("status")
);
--> statement-breakpoint
CREATE TABLE "userTasks" (
	"task_id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"project_id" integer NOT NULL,
	"description" text,
	"deadline" timestamp,
	"status" varchar(50) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "userTasks" ADD CONSTRAINT "userTasks_project_id_userProjects_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."userProjects"("project_id") ON DELETE no action ON UPDATE no action;