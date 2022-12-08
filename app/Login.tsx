'use client';
import Link from "next/link";
import Image from "next/image";
import { signIn,  } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';



const Year = new Date().getFullYear();

const Login = () => {


    const router = useRouter();
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: '',
    content: ''
  });
  const [loading, setLoading] = useState(false);

  const loginUser = async(e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setLoading(true);
   const res = await signIn("credentials", {
     email: email,
     password: password,
     redirect: false,
     callbackUrl: `${window.location.origin}/dashboard}`
    })
    
    //TODO: add a toast notification
    if(res?.error ){
      setLoading(false);
      setMessage({ type: 'error',  content: res.error });
    } else router.push('/dashboard')
    
    
  }

  return (
   
  <form onSubmit={loginUser}>
    <div className="text-center">
    <Image
              src="/img/logo.svg"
    
              width={90}
              height={90}

              alt="logo"
              className="nav_logo rounded-circle"
            />
      <h3>Welcome </h3>
      <p>Please Sign In.</p>
    </div>
    { message.content && 
              
              <span className={`${message.type === 'error' ? 'error_msg' : 'success_msg'}`}> <p>{message.content}</p></span>
            }

    <div className="form-floating mt-2 mb-3">
    <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
      <label htmlFor="email">Email address</label>
    </div>

    <div className="form-floating mt-2 mb-3">
     <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      <label htmlFor="password">Password</label>
    </div>
    <button className="w-100 default_btn" type="submit"  disabled={loading}>
      Sign in
    </button>
    {/* <p className="text-center"> or</p> */}
    {/* <SignInwithProvider providers={getProviders()} /> */}

    <p className="mt-5 mb-3 text-muted">
      No Account?{" "}
      <Link href="/signup" className="ps-2">
        Sign Up
      </Link>
    </p>

    <p className="mt-3 mb-3 text-muted">
      Forgot Password?{" "}
      <Link href="/forgot-password" className="ps-2">
        Reset
      </Link>
    </p>

    <div className="mt-5 mb-3 text-center">
      <p className="text-muted">
        &copy; 
        <span className="pe-2"> {Year}</span>
        Spana. All rights reserved
      </p>
    </div>
  </form>
  
  )
}

export default Login