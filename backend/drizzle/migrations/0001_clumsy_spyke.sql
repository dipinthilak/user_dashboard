ALTER TABLE "users" RENAME COLUMN "username" TO "email";--> statement-breakpoint
ALTER TABLE "widgets" RENAME COLUMN "username" TO "email";--> statement-breakpoint
ALTER TABLE "widgets" ADD COLUMN "widgetstate" json DEFAULT '{"w1":true,"w2":true,"w3":true}'::json NOT NULL;--> statement-breakpoint
ALTER TABLE "widgets" DROP COLUMN "wp1";--> statement-breakpoint
ALTER TABLE "widgets" DROP COLUMN "wp2";--> statement-breakpoint
ALTER TABLE "widgets" DROP COLUMN "wp3";--> statement-breakpoint
ALTER TABLE "widgets" DROP COLUMN "wp4";--> statement-breakpoint
ALTER TABLE "widgets" DROP COLUMN "wp5";