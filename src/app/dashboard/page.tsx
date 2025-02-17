import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Fingerprint } from "lucide-react"
import Link from "next/link"

const customers = [
    {
        date: "2024-08-09",
        customer: "Philip J. Fry",
        email: "fry@planetexpress.com",
        description: "Planet Express Delivery Service",
        status: "Open",
        value: "$1,337.00",
    },
    {
        date: "2024-08-09",
        customer: "Bender Rodriguez",
        email: "bender@planetexpress.com",
        description: "Robot Maintenance",
        status: "Open",
        value: "$12.34",
    },
]

export default function Dashboard() {
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
                    <TableCaption>Customer Information</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left">Date</TableHead>
                            <TableHead className="text-left">Customer</TableHead>
                            <TableHead className="text-left">Email</TableHead>
                            <TableHead className="text-left">Description</TableHead>
                            <TableHead className="text-center">Status</TableHead>
                            <TableHead className="text-right">Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customers.map((customer) => (
                            <TableRow key={customer.email}>
                                <TableCell className="text-left font-bold py-4">{customer.date}</TableCell>
                                <TableCell className="text-left font-bold py-4">{customer.customer}</TableCell>
                                <TableCell className="text-left py-4">{customer.email}</TableCell>
                                <TableCell className="text-left py-4">{customer.description}</TableCell>
                                <TableCell className="text-center py-4">
                                    <Badge
                                        className="bg-[#4169E1] text-white hover:bg-[#4169E1]/90 rounded-full"
                                        variant="secondary"
                                    >
                                        {customer.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right py-4">{customer.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </main>
        </div>
    );
} 