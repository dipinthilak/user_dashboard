CREATE TABLE "users" (
	"email" varchar PRIMARY KEY NOT NULL,
	"password" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "widgets" (
	"email" varchar PRIMARY KEY NOT NULL,
	"widgetstate" json DEFAULT '["engage","stats","activity","chart","sales","growth","perform"]'::json NOT NULL
);
