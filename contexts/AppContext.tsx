import React, {useContext, useState} from "react";

type AppContext = {
    storeName: string,
    address: string,
    contact: string,
}

type AppProviderProps = {
    children: React.ReactNode
}

const EMPTY_INFO: AppContext = {
    storeName: 'Dokan Mama',
    address: 'Road# 01, House# 02, Sector# 10, Uttara, Dhaka',
    contact: '01736800626'
}

const AppContext = React.createContext<AppContext>(EMPTY_INFO)

export const useAppContext = () => {
    return useContext(AppContext);
}

export const AppContextProvider = (props: AppProviderProps) => {
    const [info, setInfo] = useState<AppContext>(EMPTY_INFO)
    return (
        <AppContext.Provider value={{storeName: info.storeName, address: info.address, contact: info.contact}}>
            {props.children}
        </AppContext.Provider>
    )
}