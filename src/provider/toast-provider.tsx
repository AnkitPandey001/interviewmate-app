
import { Toaster } from "@/components/ui/sonner"

export const ToastProvider = () =>{
    return (
        <Toaster
        theme="light"
        richColors
        position="top-center"
        className="bg-neutral-100 shadow-lg"
        />
    )
}