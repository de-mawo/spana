"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { getCsrfToken } from "next-auth/react";


const Year = new Date().getFullYear();
// type SignInResponse = {
//   ok: boolean;
//   error?: string;
// }

const Login = () => {

  const router = useRouter();

  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  (async function myFunction() {
    const csrfToken = (await getCsrfToken()) || "";
    setToken(csrfToken);
  })();

 
  //TODO: Log in errors not working . Email taking long to send
  const handleEmailLogin = async() => {
    await signIn("email", {
      email,
      redirect: false,
    }).then(({ok, error }) => {
      if (ok) {
        router.push("/dashboard");
      } else {
        alert('OOps there is an error' + (error || 'unknown'))
      }
    })
  }
 


  return (
    <>
      <form
        className="flex flex-col space-y-4 "
        method="post"
        action="/api/auth/signin/email"
      >
        <input name="csrfToken" type="hidden" defaultValue={token} />
        <div>
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="primary-btn"
          onClick={handleEmailLogin }
        >
          Login
        </button>
        <div>
          <p className="text-center">or</p>
        </div>
      </form>
      <div className="  my-8">
        <button
          className="flex items-center w-full justify-center border  px-4 lg:px-8 py-2 lg:py-2 rounded-md"
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000/dashboard",
            })
          }
        >
          <FcGoogle className="h-6 w-6 mr-2 " /> Log in with Google
        </button>
      </div>
    </>
  );
};

export default Login;
