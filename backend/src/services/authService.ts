import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db/db_connect";
import { userSchema } from "../db/schema";
import {wpSchema} from "../db/schema"
import { eq } from "drizzle-orm";

export class AuthService {

  static async signUp(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user=await db
      .insert(userSchema)
      .values({ email: email, password: hashedPassword });

      await db.insert(wpSchema).values({
        email: email, 
        widgetstate: ['engage', 'stats', 'activity', 'chart', 'sales', 'growth', 'perform'], 
      });

    return { message: "User registered successfully",user:user};
  }



  static async signIn(email: string, password: string) {
    console.log("router executed --");

    const user = await db
      .select()
      .from(userSchema)
      .where(eq(userSchema.email, email))
      .limit(1);

      console.log(user,"user");
      console.log(user[0].password,"user -password");
      const userdata=user[0] ;
      
      
    if (!user[0] || !(await bcrypt.compare(password, user[0].password))) {

      throw new Error("Invalid credentials");
    }
    return {message:"user signin succesfully",user:userdata};
  }
}
