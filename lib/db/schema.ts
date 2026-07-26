import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const leads = pgTable('xm_leads', {
  id: uuid('id').primaryKey().defaultRandom(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company'),
  role: text('role'),
  phone: text('phone'),
  companySize: text('company_size'),
  aiUsage: text('ai_usage'),
  hasPolicy: text('has_policy'),
  dataExposure: text('data_exposure'),
  primaryConcern: text('primary_concern'),
  goal: text('goal'),
  notes: text('notes'),
  riskScore: integer('risk_score'),
  riskLevel: text('risk_level'),
  locale: text('locale').notNull().default('es'),
  source: text('source').notNull().default('landing'),
})

export type Lead = typeof leads.$inferSelect
export type NewLead = typeof leads.$inferInsert
