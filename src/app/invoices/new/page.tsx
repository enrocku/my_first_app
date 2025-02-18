"use client";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createInvoice } from "@/app/actions"
import { SubmitButton } from "@/components/ui/submit-button"

export default function CreateInvoice() {
    return (
        <div className="min-h-screen p-8">
            <main className="pt-24 px-20">
                <h1 className="text-3xl font-semibold mb-8">Create New Invoice</h1>

                <form action={createInvoice} className="max-w-md space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Customer Name</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Enter customer name"
                            type="text"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Enter customer email"
                            type="email"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Input
                            id="description"
                            name="description"
                            placeholder="Enter invoice description"
                            type="text"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="value">Value</Label>
                        <Input
                            id="value"
                            name="value"
                            placeholder="Enter invoice value"
                            type="number"
                            step="0.01"
                            required
                        />
                    </div>

                    <SubmitButton
                        type="submit"
                        className="w-full"
                        pendingText="Creating Invoice..."
                    >
                        Create Invoice
                    </SubmitButton>
                </form>
            </main>
        </div>
    );
}