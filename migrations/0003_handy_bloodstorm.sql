CREATE TABLE "projectParticipants" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"project_id" integer NOT NULL,
	"role" varchar,
	"joined_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "projectParticipants" ADD CONSTRAINT "projectParticipants_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projectParticipants" ADD CONSTRAINT "projectParticipants_project_id_userProjects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."userProjects"("id") ON DELETE no action ON UPDATE no action;