'use client'
import { signIn } from "next-auth/react";

const AuthBtn = () => {
  return (
    <>
          <button type="submit" className="primary-btn" onClick={(e) => signIn(undefined, undefined, undefined, )}>
        Login
      </button>
    </>
  );
};

export default AuthBtn;
