import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { userSchema } from "./schema";

const queryConnection = postgres(process.env.DATABASE_URL!);
const db = drizzle(queryConnection);

// const dbConnect = async () => {
//   try {
//     await db
//       .insert(userSchema)
//       .values([
//         { username: "alef", password: "123456" },
//         { username: "bolk", password: "123456" },
//       ])
//       .onConflictDoNothing();

//     console.log(await db.select().from(userSchema));
//   } catch (error) {
//     console.error("Database connection error:", error);
//   }
// };

export default db;
