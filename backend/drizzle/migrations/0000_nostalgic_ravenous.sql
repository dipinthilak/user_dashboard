CREATE TABLE "users" (
	"username" varchar PRIMARY KEY NOT NULL,
	"password" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "widgets" (
	"username" varchar PRIMARY KEY NOT NULL,
	"wp1" boolean DEFAULT false NOT NULL,
	"wp2" boolean DEFAULT false NOT NULL,
	"wp3" boolean DEFAULT false NOT NULL,
	"wp4" boolean DEFAULT false NOT NULL,
	"wp5" boolean DEFAULT false NOT NULL
);
