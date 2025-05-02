ALTER TABLE "userProjects" RENAME COLUMN "project_id" TO "id";--> statement-breakpoint
ALTER TABLE "userProjects" DROP CONSTRAINT "userProjects_status_unique";--> statement-breakpoint
ALTER TABLE "userProjects" ALTER COLUMN "title" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "userProjects" ALTER COLUMN "status" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "userProjects" ALTER COLUMN "updated_at" DROP NOT NULL;