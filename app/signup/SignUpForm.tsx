"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";

const SignUpForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
     const res = await fetch(
        "/api/register",
        
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,  email, password 
          })
        }
      )
      if (res.status === 200) {
        setMessage({
          type: 'success',
          content: 'Success. Check your email to verify'
        });
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      // console.log(error.response.data.error)

      const message = error.response.data.error
      
      setMessage({ type: 'error', content: message });
     
    }
    
    
  };


  return (
    <form className="flex flex-col space-y-4" onSubmit={register}>
         {message.content && (
            <div
              className={`${
                message.type === 'error' ? 'text-radical-red-500' : 'text-turquoise-500'
              } border ${
                message.type === 'error' ? 'border-radical-red-500' : 'border-turquoise-500'
              } p-3`}
            >
              {message.content}
            </div>
          )}
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
      <div>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className=" form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="form-label ">
          Password
        </label>
        <input
          type={!isChecked ? "password" : "text"}
          className=" form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className="w-4 h-4 text-deep-sapphire-600 bg-gray-100 rounded border-deep-sapphire-600 focus:ring-deep-sapphire-500  focus:ring-2 "
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="terms"
            className="font-light text-gray-500 dark:text-gray-300"
          >
            {" "}
            Show Password
          </label>
        </div>
      </div>
      <button type="submit" className="primary-btn" disabled={loading}>
        Sign Up
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          href="/"
          className="font-medium text-deep-sapphire-600 hover:underline dark:text-deep-sapphire-500"
        >
          Login here
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
