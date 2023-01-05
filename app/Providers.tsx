"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

const Providers = ({ session, children }: any) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SessionProvider session={session}>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
