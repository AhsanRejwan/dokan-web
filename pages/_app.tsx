import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {AlertContextProvider} from "../contexts/AlertContext";
import React from "react";
import {AppContextProvider} from "../contexts/AppContext";
import {CartContextProvider} from "../contexts/CartContext";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <AlertContextProvider>
            <AppContextProvider>
                <CartContextProvider>
                    <Component {...pageProps} />
                </CartContextProvider>
            </AppContextProvider>
        </AlertContextProvider>
    )
}
export default MyApp
