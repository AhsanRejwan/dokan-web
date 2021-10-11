import type { AppProps } from "next/app";
import React from "react";
import { SWRConfig } from "swr";
import { AlertContextProvider } from "../contexts/AlertContext";
import { CartContextProvider } from "../contexts/CartContext";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AlertContextProvider>
      <SWRConfig>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </SWRConfig>
    </AlertContextProvider>
  );
};
export default MyApp;
