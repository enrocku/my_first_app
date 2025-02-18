ALTER TABLE "invoices" ALTER COLUMN "date" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "invoices" ALTER COLUMN "date" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "invoices" ALTER COLUMN "value" SET DATA TYPE text;