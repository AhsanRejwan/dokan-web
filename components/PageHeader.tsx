import React from "react";
import styles from "./PageHeader.module.scss";
import { StoreDetails } from "../models/StoreDetails";

type PageHeaderProps = {
    storeDetails: StoreDetails;
}

export const PageHeader = (props: PageHeaderProps) => {
    const {storeDetails} = props;

    console.log('store address', storeDetails.address);

    return (
        <div className={`${styles.header} px-3 py-4`}>
            <h3>{storeDetails.storeName.toUpperCase()}</h3>
            <div>{storeDetails.address.toUpperCase()}</div>
            <div>Contact {storeDetails.phoneNumber}</div>
        </div>
    )
}
