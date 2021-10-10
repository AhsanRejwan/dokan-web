import type { AppProps } from 'next/app';
import React from "react";
import { AlertContextProvider } from "../contexts/AlertContext";
import { CartContextProvider } from "../contexts/CartContext";
import '../styles/globals.scss';

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <AlertContextProvider>
            <CartContextProvider>
                <Component {...pageProps} />
            </CartContextProvider>
        </AlertContextProvider>
    )
}
export default MyApp
