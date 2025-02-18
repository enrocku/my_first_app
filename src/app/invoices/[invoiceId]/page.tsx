import { db } from "@/app/db";
import { invoices } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";

interface PageProps {
    params: {
        invoiceId: string;
    };
}

export default async function InvoicePage({ params }: PageProps) {
    // Fetch the specific invoice
    const invoice = await db.query.invoices.findFirst({
        where: eq(invoices.id, parseInt(params.invoiceId))
    });

    // If invoice not found, show 404
    if (!invoice) {
        notFound();
    }

    // Format the date
    const formattedDate = new Date(invoice.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen p-8">
            <main className="pt-24 px-20">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-semibold mb-8">Invoice Details</h1>

                    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm text-gray-500">Invoice Date</p>
                                <p className="font-medium">{formattedDate}</p>
                            </div>
                            <Badge
                                className="bg-[#4169E1] text-white hover:bg-[#4169E1]/90 rounded-full"
                                variant="secondary"
                            >
                                {invoice.status}
                            </Badge>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Description</p>
                            <p className="font-medium">{invoice.description}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Amount</p>
                            <p className="text-2xl font-bold">${parseFloat(invoice.value).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
