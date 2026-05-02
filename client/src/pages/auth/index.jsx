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
            <button className="bg-black text-white px-5 py-2 mt-5 cursor-pointer hover:bg-gray-600"
                    onClick={()=> setLoginView(!loginView)}
            >
                {
                    loginView ? 'Register a new User' : 'Sign In Existing account'
                }
            </button>
        </div>
    )
}
export default AuthPage;