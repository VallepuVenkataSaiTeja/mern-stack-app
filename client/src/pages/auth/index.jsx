
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

            <div>
                {
                    loginView ? <form className="flex flex-col w-96 m-auto gap-3 border p-5 my-5"
                                      onSubmit={e => e.preventDefault()}>

                        <label htmlFor="name">name</label>
                        <input type="text" id="name"
                        className="border p-1" />

                        <label htmlFor="email">email</label>
                        <input type="email" id="email"
                        className="border p-1" />

                       <label htmlFor="password">password</label>
                        <input type="password" id="password"
                        className="border p-1" />

                        <button className="bg-black text-white px-5 py-2 mt-5 cursor-pointer hover:bg-gray-600"
                         type="submit">Sign Up</button>

                    </form> : <form className="flex flex-col w-96 m-auto gap-3 border p-5 my-5"
                                     onSubmit={e => e.preventDefault()}>

                        <label htmlFor="email">email</label>
                        <input type="email" id="email"
                        className="border p-1" />

                       <label htmlFor="password">password</label>
                        <input type="password" id="password"
                        className="border p-1" />

                        <button className="bg-black text-white px-5 py-2 mt-5 cursor-pointer hover:bg-gray-600"
                         type="submit">Sign In</button>

                    </form>
                }
            </div>
            
            <button
            className="bg-black text-white px-5 py-2 mt-5 cursor-pointer hover:bg-gray-600"
            onClick={()=> setLoginView(!loginView)}>
                {loginView ? 'Sign In Existing account' : 'Register a new User'}
            </button>
                    
        </div>
    )
}
export default AuthPage;