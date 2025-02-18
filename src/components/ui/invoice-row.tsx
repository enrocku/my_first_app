'use client';

import { TableCell, TableRow } from "./table";

interface Invoice {
    id: number;
    date: Date;  // Explicitly type as Date
    description: string;
    status: 'Open' | 'Paid' | 'Void' | 'Uncollectible';
    value: string;
}

export function InvoiceRow({ invoice }: { invoice: Invoice }) {
    // Ensure we're working with a Date object
    const date = invoice.date instanceof Date ? invoice.date : new Date(invoice.date);

    // Format the date
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <TableRow
            className="cursor-pointer hover:bg-muted/60"
            onClick={() => window.location.href = `/invoices/${invoice.id}`}
        >
            <TableCell className="text-left font-bold py-4">
                {formattedDate}
            </TableCell>
            {/* ... rest of your row cells ... */}
        </TableRow>
    );
} 