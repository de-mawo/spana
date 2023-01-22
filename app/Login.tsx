"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Year = new Date().getFullYear();

const Login = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);

  const loginUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: `${window.location.origin}/dashboard}`,
    });

    //TODO: add a toast notification
    if (res?.error) {
      setLoading(false);
      setMessage({ type: "error", content: res.error });
    } else router.push("/dashboard");
  };

  return (
    <form className="flex flex-col space-y-4 " onSubmit={loginUser}>
        {message.content && (
        <span
          className={`${
            message.type === "error" ?  'text-radical-red-500' : 'text-turquoise-500'
          }`}
        >
          {" "}
          <p>{message.content}</p>
        </span>
      )}
      <div>
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input type="email" className="form-input" 
        name="email"
        value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="form-label ">
          Password
        </label>
        <input  type={!isChecked ? "password" : "text"}className=" form-input" 
        name="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              className="w-4 h-4 text-deep-sapphire-600 bg-gray-100 rounded border-deep-sapphire-600 focus:ring-deep-sapphire-500  focus:ring-2"
              checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="text-gray-600 dark:text-gray-400">
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

      <button type="submit" className="primary-btn" disabled={loading}>
        Login
      </button>

      <p className="text-sm font-light text-gray-600 dark:text-gray-400">
        Don’t have an account yet?
        <Link
          href="/signup"
          className="font-medium text-deep-sapphire-600 hover:underline ml-1 dark:text-deep-sapphire-300"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default Login;
