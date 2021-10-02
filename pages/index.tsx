import type {NextPage} from 'next'
import {PageHeader} from "../components/PageHeader";
import styles from '../styles/Home.module.scss'
import {IoCartOutline} from "react-icons/io5"
import {ProductContainer} from "../components/ProductContainer";

const Home: NextPage = () => {
    return (
        <div className="mx-0 mx-md-auto col-12 col-md-10 col-lg-8 col-xl-6 mt-3">
            <PageHeader/>
            <div className="mx-3">
                <div className="d-flex justify-content-end mt-4">
                    <div className={`${styles.cartCount} centered-flex p-2`}>
                        15
                    </div>
                    <div className={`${styles.cartName} centered-flex p-2`}>
                        <span className="font-weight-bold">MY CART</span>
                        <div className="pl-3 centered-flex">
                            <IoCartOutline size="25"/>
                        </div>
                    </div>
                </div>
                <ProductContainer/>
            </div>
        </div>
    )
}

export default Home
