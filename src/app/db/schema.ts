import { pgTable, serial, text, pgEnum } from 'drizzle-orm/pg-core';

// Define the status enum type
export const invoiceStatus = pgEnum('status', ['Open', 'Paid', 'Void', 'Uncollectible']);

export const invoices = pgTable('invoices', {
    id: serial('id').primaryKey().notNull(),
    date: text('date').notNull(),
    description: text('description').notNull(),
    value: text('value').notNull(),
    status: invoiceStatus('status').default('Open').notNull(),
}); 