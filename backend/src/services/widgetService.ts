import  db  from "../db/db_connect";
import { wpSchema } from "../db/schema";
import { eq } from "drizzle-orm";

export class WidgetService {
  static async getWidgetState(email: string): Promise<any> {
    console.log(`Fetching widget state for ${email}`);
    const result = await db.select().from(wpSchema).where(eq(wpSchema.email, email)).limit(1);
    console.log(result[0].widgetstate,"result from state fetch");
    
    return result[0]?.widgetstate || {};
  }

  static async updateWidgetState(email: string, state: any[]): Promise<any> {
    console.log(`Updating widget state for ${email} with state:`, state);
    await db.insert(wpSchema).values({ email, widgetstate: state }).onConflictDoUpdate({ target: wpSchema.email, set: { widgetstate: state } });
    return { message: "Widget state updated" };
  }
}
