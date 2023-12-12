import "postcss";
import "@/styles/globals.css";
import "@/fonts";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
