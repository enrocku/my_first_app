'use client';

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { ButtonProps } from "@/components/ui/button";

interface SubmitButtonProps extends ButtonProps {
    pendingText?: string;
}

export function SubmitButton({
    children,
    pendingText = "Please wait...",
    ...props
}: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <Button {...props} disabled={pending}>
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {pendingText}
                </>
            ) : (
                children
            )}
        </Button>
    );
} 