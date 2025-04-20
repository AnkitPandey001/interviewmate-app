
import { SignIn as SignInPages } from "@clerk/clerk-react"

export const SignIn = () =>{
    return (
        <div>
            <SignInPages path="/sign-in"/>
        </div>
    )
}