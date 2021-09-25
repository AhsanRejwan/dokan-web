import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {AlertContextProvider} from "../contexts/AlertContext";
import React from "react";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <AlertContextProvider>
                <Component {...pageProps} />
        </AlertContextProvider>
    )
}
export default MyApp
