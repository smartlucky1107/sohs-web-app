import { useRouter } from "next/router";
import CommonFooter from "@/components/footer/common";
import CommonHeader from "@/components/header/common";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();

  // Array of URLs to exclude
  const excludedURLs = ["/login", "/profile", "/register"];

  // Check if the current URL matches any excluded URL
  const isExcluded = excludedURLs.includes(router.pathname);

  return (
    <SessionProvider session={session}>
      {isExcluded
        ? null
        : router.pathname !== "/print-test" && <CommonHeader />}
      <Component {...pageProps} />
      {isExcluded
        ? null
        : router.pathname !== "/print-test" && <CommonFooter />}
    </SessionProvider>
  );
}
