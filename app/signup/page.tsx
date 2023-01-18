import Link from "next/link";
import Image from "next/image";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const Year = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-center   py-8 px-6 md:h-screen ">
      <section className="w-full  rounded-lg shadow-2xl sm:max-w-md p-6 dark:border dark:border-gray-700">
        <Link href={"/"} className="  ">
          <Image
            src="/img/logo.svg"
            alt="logo"
            width={90}
            height={90}
            className="mx-auto mb-12"
          />
        </Link>

        <h1 className="text-xl text-center my-5  leading-tight tracking-tight text-deep-sapphire-900 md:text-2xl dark:text-white">
          Create an account
        </h1>
        <SignUpForm />
        <div className="my-5 text-gray-500 dark:text-gray-400">
          <p className="text-center">
            
            <span className="pr-2">&copy;{Year}</span>
            Spana
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
