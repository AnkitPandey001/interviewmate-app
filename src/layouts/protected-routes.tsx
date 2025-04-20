import { LoaderPage } from "@/routes/loader-page";
import { useAuth } from "@clerk/clerk-react"

import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes =()=>{

    const {isLoaded,isSignedIn} = useAuth();
     
    if(!isLoaded){
        return <LoaderPage/>
    }

    if(!isSignedIn){
        return <Navigate to={"/sign-in"} replace/>
    }

    return <Outlet/>;
}