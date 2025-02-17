CREATE TYPE "public"."status" AS ENUM('Open', 'Paid', 'Void', 'Uncollectible');--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"description" text NOT NULL,
	"status" "status" DEFAULT 'Open' NOT NULL,
	"value" numeric(10, 2) NOT NULL
);
