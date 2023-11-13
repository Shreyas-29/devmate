import { Button, buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { toast } from "./use-toast";
import Image from "next/image";
import { X } from "lucide-react";

export const useCustomToast = () => {
    const cookieToast = () => {
        const { dismiss } = toast({
            title: 'Welcome to DevMate!',
            description: 'This website uses cookies to ensure you get the best experience on our website',
            action: (
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                        dismiss();
                        localStorage.setItem('cookie_consent', 'true');
                    }}
                >
                    Accept
                </Button>
            )
        })
    }

    return { cookieToast };
}