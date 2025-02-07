import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/db/schema.ts", // Path to schema file
  out: "./drizzle", // Where migrations will be stored
  driver: "pg_postgres", // ✅ Use "pg_postgres" instead of "pg"
  dbCredentials: {
    connectionString: process.env.DATABASE_URL, // Load from .env
  },
});
