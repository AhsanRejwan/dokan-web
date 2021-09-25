import React from "react";
import styles from "./PageHeader.module.scss";
import {useAppContext} from "../contexts/AppContext";

export const PageHeader = () => {
    const appInfo = useAppContext()

    return (
        <div className={`${styles.header} px-3 py-4`}>
            <h3>{appInfo.storeName.toUpperCase()}</h3>
            <div>{appInfo.address.toUpperCase()}</div>
            <div>Contact {appInfo.contact}</div>
        </div>
    )
}