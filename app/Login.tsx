"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { getCsrfToken } from "next-auth/react"

const Year = new Date().getFullYear();


const Login =  () => {

  
  const [token, setToken] = useState("");

   (async function myFunction() {
    const csrfToken = await getCsrfToken() || ''
    setToken(csrfToken)
  })();
  
  console.log(token);
  


  const router = useRouter();

  const [email, setEmail] = useState("");
  

  return (

    <> 
    <form className="flex flex-col space-y-4 " method="post" action="/api/auth/signin/email">
       <input name="csrfToken" type="hidden" defaultValue={token} />
      <div>
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input type="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password" className="form-label ">
          Password
        </label>
        <input type="password" className=" form-input" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              className="w-4 h-4 text-deep-sapphire-600 bg-gray-100 rounded border-deep-sapphire-600 focus:ring-deep-sapphire-500  focus:ring-2"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-600 dark:text-gray-400"
            >
              Show Password
            </label>
          </div>
        </div>
        <Link
          href="/forgot-password"
          className="text-sm font-medium text-primary-600 hover:underline text-deep-sapphire-600 dark:text-deep-sapphire-300"
        >
          Forgot password?
        </Link>
      </div>

      <button type="submit" className="primary-btn" onClick={() => signIn('email', { email: email , callbackUrl: 'http://localhost:3000/dashboard'})}>
        Login
      </button>
        <div>
         
        <p className="text-center">or</p>
        </div>
     
     

      <p className="text-sm font-light text-gray-600 dark:text-gray-400">
        Don’t have an account yet?
        <Link
          href="/sign-up"
          className="font-medium text-deep-sapphire-600 hover:underline ml-1 dark:text-deep-sapphire-300"
        >
          Sign Up
        </Link>
      </p>
    </form>
     <div className="flex items-center space-x-5 my-8">
     <button className="flex  items-center" onClick={() => signIn('google', {
       callbackUrl: 'http://localhost:3000/dashboard'
     })}>
       {" "}
       <FcGoogle className="h-6 w-6 mr-2 " /> Log in with Google
     </button>
     <button className="flex  items-center">
       {" "}
       <BsApple className="h-6 w-6 mr-2  dark:text-gray-300" /> Log in with
       Apple
     </button>
   </div>
   </>
  );
};

export default Login;
