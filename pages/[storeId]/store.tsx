import {useEffect} from "react";
import type {GetServerSideProps, NextPage} from "next";
import Link from "next/link";
import {useRouter} from "next/router";
import {IoCartOutline} from "react-icons/io5";
import {PageHeader} from "../../components/PageHeader";
import {ProductContainer} from "../../components/ProductContainer";
import {StoreNotFound} from "../../components/StoreNotFound";
import {serviceLinks} from "../../constants/serviceLinks";
import {useCartContext} from "../../contexts/CartContext";
import {StoreDetails} from "../../models/StoreDetails";
import {createDefaultAxios} from "../../service/axios";
import {updateStoreVisited} from "../../service/services";
import {VISIT_KEY} from "../../constants/appConstants";
import styles from "./Home.module.scss";

type HomePageProps = {
  error: any;
  storeDetails: StoreDetails;
};

const HomePage: NextPage<HomePageProps> = (props) => {
  const { storeDetails, error } = props;
  const { products } = useCartContext();
  const { storeId } = useRouter().query;

  useEffect(() => {
    let visitedStores: Array<string> = [];
    const localArray = localStorage.getItem(VISIT_KEY);
    if (localArray) {
      visitedStores = JSON.parse(localArray);
    }
    if (visitedStores.some(item => item === storeId)) {
      return;
    } else {
      updateStoreVisited(String(storeId))
        .then(() => {
          visitedStores.push(String(storeId));
          localStorage.setItem(VISIT_KEY, JSON.stringify(visitedStores));
        })
        .catch(() => console.error('Store visit api failed'))
    }
  }, [storeId]);

  if (error) {
    return <StoreNotFound/>
  } else {
    return (
      <div className="mx-0 mx-md-auto col-12 col-md-10 col-lg-8 col-xl-6 mt-3">
        <PageHeader storeDetails={storeDetails} />
        <div className="mx-3">
          <div role="button">
            <Link href={`/${storeId}/cart`} passHref>
              <div className="d-flex justify-content-end mt-4">
                <div className={`${styles.cartCount} centered-flex p-2`}>
                  {products.reduce((prev, current) => {
                    return prev + current.numberOrdered;
                  }, 0)}
                </div>
                <div className={`${styles.cartName} centered-flex p-2`}>
                  <span className="font-weight-bold">MY CART</span>
                  <div className="pl-3 centered-flex">
                    <IoCartOutline size="25" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <ProductContainer />
        </div>
      </div>
    );
  }
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const axios = createDefaultAxios();
  const storeUrlName = context.params?.storeId || "";
  let storeDetails: StoreDetails = {
    address: "",
    phoneNumber: "",
    storeName: "",
  };
  let error = null;
  if (typeof storeUrlName === "string") {
    try {
      const { data } = await axios.get(serviceLinks.storeDetails(storeUrlName));
      storeDetails = data;
    } catch (e: unknown) {
      error = "ERRORRR!!!";
    }
  } else {
    error = "ERRORRR!!!";
  }
  return {
    props: {
      storeDetails,
      error,
    },
  };
};

export default HomePage;
