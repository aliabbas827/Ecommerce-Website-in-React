import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loggingIn, setLoggingIn] = useState(false)

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleLogIn = async (e) => {
        e.preventDefault();
        try {
            setLoggingIn(true);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            const user = await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login Successful");
            setEmail("");
            setPassword("");
            navigate("/");
        } catch (error) {
            console.log(error);
            setError("Incorrect email or password");
            toast.error("Login Failed");
        } finally {
            setLoggingIn(false);
        }
    };

    // ...
    const handleGoogleLogin = async () => {
        try {
            setLoggingIn(true);
            
            await new Promise((resolve) => setTimeout(resolve, 3000));
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            toast.success("Login Successful");
            setEmail("");
            setPassword("");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Login Failed");
        } finally {
            setLoggingIn(false);
        }
    };

    const handleFacebookLogin = async () => {
        try {
            setLoggingIn(true);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            const provider = new FacebookAuthProvider();
            const result = await signInWithPopup(auth, provider);
            toast.success("Login Successful");
            setEmail("");
            setPassword("");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Login Failed");
        } finally {
            setLoggingIn(false);
        }
    };

    return (
        <>

        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2  ">
                <div className="w-full  lg:order-none order-2 ">
                    <img src="./Images/banner2.png" alt="" className=" h-screen sm:w-full" />
                </div>
                <form className="flex flex-col gap-6  justify-center xl:w-[50%] mx-auto px-3 py-10 sm:py-0">
                    <h2 className="text-black text-3xl font-semibold">Log in to Exclusive</h2>
                    <h2>Enter your details below</h2>
                    <div className="flex flex-col gap-8">
                        <input
                            className="h-8 border-b border-gray-300 py-2 text-sm placeholder:text-gray-600 focus:outline-none"
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <input
                            className="h-8 border-b border-gray-300 py-2 text-sm placeholder:text-gray-600 focus:outline-none"
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="text-red-500">{error}</p>} 
                    </div>
                    <button className={` ${loggingIn ? "opacity-70" : ""}`} onClick={handleLogIn}>{loggingIn ? "Loading" : "Login"}</button>
                    <button type="button" className="btn_white flex gap-3 items-center justify-center" onClick={handleGoogleLogin} >
                        <img src="./Images/googleicon.png" alt="" className="w-6" />
                        Login with Google
                    </button>
                    <button type="button" className="btn_white flex gap-2 items-center justify-center" onClick={handleFacebookLogin}>
                        <img src="./Images/fbicon.png" alt="" className="w-8" />
                        Login with Facebook
                    </button>
                    <div className="text-center text-gray-700 flex items-center justify-center gap-3">
                        <h2 className=" text-sm">Don't have an account ?</h2>
                        <span className="text-sm font-semibold underline underline-offset-8"><Link to="/sign-up" >Sign Up</Link></span>
                    </div>
                </form>
            </div>
        </section>
        </>
        
    )
}

export default Login