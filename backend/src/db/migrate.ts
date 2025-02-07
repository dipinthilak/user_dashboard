import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrationConnection = postgres(process.env.DATABASE_URL!, { max: 1 });

const runMigrations = async () => {
  try {
    await migrate(drizzle(migrationConnection), {
      migrationsFolder: "./drizzle/migrations",
    });
    console.log("Migrations completed successfully.");
  } catch (error) {
    console.error("Migration error:", error);
  } finally {
    await migrationConnection.end();
  }
};

runMigrations();
