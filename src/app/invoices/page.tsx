import { Button } from "@/components/ui/button"
import { Fingerprint } from "lucide-react"
import Link from "next/link"

export default function InvoicesPage() {
    return (
        <div className="min-h-screen p-8">
            <main className="pt-24 px-20">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold pl-1">
                        Invoices
                    </h1>
                    <Button variant="ghost" className="gap-2" asChild>
                        <Link href="/invoices/new">
                            Create New Invoice
                            <Fingerprint className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </main>
        </div>
    );
} 