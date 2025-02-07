import  db  from "../db/db_connect";
import { wpSchema } from "../db/schema";
import { eq } from "drizzle-orm";

export class WidgetService {
  static async getWidgetState(email: string) {
    const result = await db.select().from(wpSchema).where(eq(wpSchema.email, email)).limit(1);
    return result[0]?.widgetstate || {};
  }

  static async updateWidgetState(email: string, newState: Record<string, any>) {
    await db.insert(wpSchema).values({ email, widgetstate: newState }).onConflictDoUpdate({ target: wpSchema.email, set: { widgetstate: newState } });
    return { message: "Widget state updated" };
  }
}
