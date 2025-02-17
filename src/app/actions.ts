'use server';

import { db } from "@/app/db";
import { invoices } from "@/app/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'

export async function createInvoice(formData: FormData): Promise<void> {
    // Get all form fields
    const date = formData.get('date');
    const description = formData.get('description');
    const rawValue = formData.get('value');
    const name = formData.get('name');
    const email = formData.get('email');

    // Log the raw data
    console.log('Raw Form Data:', {
        date,
        description,
        value: rawValue,
        name,
        email
    });

    // Validate that all fields exist
    if (!date || !description || !rawValue || !name || !email) {
        console.error('Missing required fields');
        throw new Error('All fields are required');
    }

    console.log('Raw value from form:', rawValue);

    if (!rawValue) {
        throw new Error('Value is required');
    }

    const valueInCents = Math.round(parseFloat(rawValue.toString()) * 100);
    console.log('Value in cents:', valueInCents);
    console.log('Value as float:', valueInCents / 100);

    try {
        // Insert into database
        const newInvoice = await db.insert(invoices).values({
            date: new Date(date.toString()).toISOString().split('T')[0], // Format as YYYY-MM-DD
            description: description.toString(),
            value: (valueInCents / 100).toString(), // Convert to string since schema expects string
            status: 'Open'  // Default status
        }).returning({ id: invoices.id });

        console.log('New invoice created:', newInvoice);
        revalidatePath('/invoices');

        redirect(`/invoices/${newInvoice[0].id}`);
    } catch (error) {
        // Check if this is a redirect error (which is expected)
        if (error instanceof Error && error.message.includes('NEXT_REDIRECT')) {
            throw error; // Re-throw redirect "errors" as they're expected
        }

        console.error('Failed to create invoice:', error);
        throw new Error(`Failed to create invoice: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
