import CommonButton from "@/components/common-button";
import { useState } from "react";

function AuthPage(){
    const [loginView, setLoginView] = useState(true);
    return (
        <div>
            <h1>Welcome</h1>
            <h2 className="pt-5">
                {
                    loginView ? 'Sign Up' : 'Sign In'
                }
            </h2>
            <CommonButton
                    type={'button'}
                    onClick={()=> setLoginView(!loginView)}
                    buttonText={loginView ? 'Register a new User' : 'Sign In Existing account'}
            / >
        </div>
    )
}
export default AuthPage;