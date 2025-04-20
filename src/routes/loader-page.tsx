
import {Loader} from "lucide-react";

export const LoaderPage = () =>{
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-transparent z-50">
            <Loader className="w-6 h-6 min-w-6 min-h-6 animate-spin"/>
        </div>
    )
}