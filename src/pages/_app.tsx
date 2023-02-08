import type { AppProps } from "next/app";
import "../styles/globals.css";
import Context from "@/lib/Context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  );
}
