"use client";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { ClientSafeProvider, signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast'

// type Props = {
//   providers: Awaited<ReturnType<typeof getProviders>>;
// };

function LoginComponent() {
  const [providers, setProviders] = useState<
    Record<string, ClientSafeProvider>
  >({});


  

  useEffect(() => {
    async function getProvidersValue() {
      const p = await getProviders();
      setProviders(p as Record<string, ClientSafeProvider>);
    }
    getProvidersValue();
  }, []);

  return (
    <> 
    
    <div className="flex flex-col space-y-4">
      {providers &&
        !!Object.keys(providers).length &&
        Object.values(providers!).map((provider) => (
          <div key={provider.name}>
            <button
              type="submit"
              className="flex items-center justify-center w-full border  font-medium rounded-lg text-sm px-5 py-2.5 "
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: '/dashboard',
                //   redirect: false
                })
              }
            >
              {provider.name === "Google" ? (
                <FcGoogle className="h-6 w-6 mr-3 " />
              ) : (
                <BsFacebook className="h-6 w-6 mr-3 text-blue-600" />
              )}{" "}
              Login with {provider.name}
            </button>
          </div>
        ))}
    </div>
    </>
  );
}

export default LoginComponent;