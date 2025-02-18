'use client';

import { TableRow, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Invoice {
    id: number
    date: string | Date
    description: string
    status: 'Open' | 'Paid' | 'Void' | 'Uncollectible'
    value: string
}

export function InvoiceRow({ invoice }: { invoice: Invoice }) {
    const formattedDate = invoice.date instanceof Date
        ? invoice.date
        : new Date(invoice.date);

    return (
        <TableRow
            key={invoice.id}
            className="cursor-pointer hover:bg-muted/60"
            onClick={() => window.location.href = `/invoices/${invoice.id}`}
        >
            <TableCell className="text-left font-bold py-4">
                {formattedDate.toLocaleDateString()}
            </TableCell>
            <TableCell className="text-left py-4">
                {invoice.description}
            </TableCell>
            <TableCell className="text-center py-4">
                <Badge
                    className="bg-[#4169E1] text-white hover:bg-[#4169E1]/90 rounded-full"
                    variant="secondary"
                >
                    {invoice.status}
                </Badge>
            </TableCell>
            <TableCell className="text-right py-4">
                ${parseFloat(invoice.value).toFixed(2)}
            </TableCell>
        </TableRow>
    );
} 