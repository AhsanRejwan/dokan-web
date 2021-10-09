import type {NextPage} from 'next'
import {PageHeader} from "../../components/PageHeader";
import styles from './Home.module.scss'
import {IoCartOutline} from "react-icons/io5"
import {ProductContainer} from "../../components/ProductContainer";
import Link from "next/link"
import {useCartContext} from "../../contexts/CartContext";
import {useRouter} from "next/router";

const Home: NextPage = () => {
    const {products} = useCartContext()
    const {storeId} =  useRouter().query

    return (
        <div className="mx-0 mx-md-auto col-12 col-md-10 col-lg-8 col-xl-6 mt-3">
            <PageHeader/>
            <div className="mx-3">
                <div role="button">
                    <Link href={`/${storeId}/cart`}>
                        <div className="d-flex justify-content-end mt-4">
                            <div className={`${styles.cartCount} centered-flex p-2`}>
                                {products.reduce((prev, current) => {
                                    return prev + current.quantity;
                                }, 0)}
                            </div>
                            <div className={`${styles.cartName} centered-flex p-2`}>
                                <span className="font-weight-bold">MY CART</span>
                                <div className="pl-3 centered-flex">
                                    <IoCartOutline size="25"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <ProductContainer/>
            </div>
        </div>
    )
}

export default Home
