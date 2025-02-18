import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Fingerprint } from "lucide-react"
import Link from "next/link"
import { db } from "@/app/db"
import { invoices } from "@/app/db/schema"
import { desc } from "drizzle-orm"
import { InvoiceRow } from "@/components/invoice-row"
import { sql } from "drizzle-orm"

// Define the type for raw database row
interface RawInvoiceRow {
    id: number;
    date: string;
    description: string;
    value: string;
    status: 'Open' | 'Paid' | 'Void' | 'Uncollectible';
    [key: string]: unknown;  // Add index signature
}

export default async function Dashboard() {
    // Use raw SQL query to get the data correctly
    const rawResult = await db.execute(
        sql`SELECT * FROM invoices ORDER BY date DESC, id DESC`
    );

    const invoiceData = rawResult.rows.map(row => ({
        id: Number(row.id),
        date: new Date(row.date as string), // Add type assertion for date
        description: String(row.description), // Convert to string
        value: String(row.value), // Convert to string
        status: row.status as 'Open' | 'Paid' | 'Void' | 'Uncollectible'
    }));

    console.log('Parsed invoice data:', invoiceData[0]);

    return (
        <div className="min-h-screen p-8">
            <main className="pt-24 px-20">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold pl-1">
                        Invoices
                    </h1>
                    <Button variant="ghost" className="gap-2" asChild>
                        <Link href="/invoices/new">
                            Create Invoice
                            <Fingerprint className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <Table>
                    <TableCaption>Invoice Information</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left">Date</TableHead>
                            <TableHead className="text-left">Description</TableHead>
                            <TableHead className="text-center">Status</TableHead>
                            <TableHead className="text-right">Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoiceData.map((invoice) => (
                            <InvoiceRow
                                key={invoice.id.toString()}
                                invoice={invoice}
                            />
                        ))}
                    </TableBody>
                </Table>
            </main>
        </div>
    );
} 