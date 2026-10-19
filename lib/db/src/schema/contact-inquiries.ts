import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

/** Inquiries are private: deliberately no public read/list endpoint. */
export const contactInquiries = pgTable("contact_inquiries", {
  id: uuid("id").primaryKey().defaultRandom(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
