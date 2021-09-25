import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {AlertContextProvider} from "../contexts/AlertContext";
import React from "react";
import {AppContextProvider} from "../contexts/AppContext";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <AlertContextProvider>
            <AppContextProvider>
                <Component {...pageProps} />
            </AppContextProvider>
        </AlertContextProvider>
    )
}
export default MyApp
