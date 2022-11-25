import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

import NavComponent from "../components/navbar";
import FooterComponent from "../components/footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="min-w-screen flex h-screen min-h-screen w-screen flex-col justify-between bg-gray-900">
        <NavComponent />
        <Component {...pageProps} />
        <FooterComponent />
      </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
