import {
  pgTable,
  boolean,
  varchar,
  json,
} from "drizzle-orm/pg-core";


export const userSchema=pgTable("users",{
    email:varchar("email").notNull().primaryKey(),
    password:varchar("password").notNull(),
})

export const wpSchema=pgTable("widgets",{
    email: varchar("email").notNull().primaryKey(),
    widgetstate: json("widgetstate").notNull().default(['engage', 'stats', 'activity', 'chart', 'sales', 'growth', 'perform']),
})