import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db/db_connect";
import { userSchema } from "../db/schema";
import {wpSchema} from "../db/schema"
import { eq } from "drizzle-orm";

export class AuthService {


    
  static async signUp(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db
      .insert(userSchema)
      .values({ email: email, password: hashedPassword });

      await db.insert(wpSchema).values({
        email: email, 
        widgetstate: { w1: true, w2: true, w3: true }, // Ensure default is set
      });

    return { message: "User registered successfully" };
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
      const data=user[0] ;
      
      
    if (!user[0] || !(await bcrypt.compare(password, user[0].password))) {

      throw new Error("Invalid credentials");
    }
    return {data};
  }
}
