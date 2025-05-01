CREATE TABLE IF NOT EXISTS "users" (
  "id" serial PRIMARY KEY NOT NULL,
  "firstName" varchar(255) NOT NULL,
  "lastName" varchar(255) NOT NULL,
  "userType" varchar(255) NOT NULL,
  "email" varchar(255) NOT NULL,
  "address" text NOT NULL,
  "status" varchar NOT NULL,
  "createdAt" timestamp DEFAULT now(),
  "updatedAt" timestamp,
  CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint

CREATE TABLE IF NOT EXISTS "userProjects" (
  "id" serial PRIMARY KEY NOT NULL,
  "title" varchar NOT NULL,
  "description" text,
  "created_by" integer,
  "status" varchar NOT NULL,
  "created_at" timestamp DEFAULT now(),
  "updated_at" timestamp
);
--> statement-breakpoint

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.table_constraints
    WHERE constraint_name = 'userProjects_created_by_users_id_fk'
      AND table_name = 'userProjects'
  ) THEN
    ALTER TABLE "userProjects"
    ADD CONSTRAINT "userProjects_created_by_users_id_fk"
    FOREIGN KEY ("created_by") REFERENCES "public"."users"("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION;
  END IF;
END;
$$;
