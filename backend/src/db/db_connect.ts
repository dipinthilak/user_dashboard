import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { userSchema } from "./schema";

const queryConnection = postgres(process.env.DATABASE_URL!);
const db = drizzle(queryConnection);

export default db;
