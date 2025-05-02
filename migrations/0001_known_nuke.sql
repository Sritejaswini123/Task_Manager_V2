ALTER TABLE "userProjects" ALTER COLUMN "created_by" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" text NOT NULL;