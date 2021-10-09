import React from "react";
import styles from "./ProductPricingCard.module.scss";
import {IoAddCircle, IoRemoveCircle, IoTrashOutline} from "react-icons/io5";
import {CartProduct} from "../contexts/CartContext";

type ProductPricingCard = {
    product: CartProduct
    increment: (id: string) => void
    decrement: (id: string) => void
    remove: (id: string) => void
}

export const ProductPricingCard = (props: ProductPricingCard) => {
    const {product, increment, decrement, remove} = props;

    const incrementAmount = () => {
        if (product.quantity < product.stock) {
            increment(product.id);
        }
    }

    const decrementAmount = () => {
        if (product.quantity > 1)
            decrement(product.id)
    }

    const removeProduct = () => {
        remove(product.id)
    }

    return (
        <div className="d-flex justify-content-between mb-2">
            <div className="d-flex w-50">
                <div className={styles.cartImage}>
                    <img src="https://picsum.photos/400/300" alt="product image" width="100%" height="100%"/>
                </div>
                <div className="pl-3 text-wrap">
                    <div className="d-flex">
                        <div className={styles.productTitle}>{product.name}</div>
                        <IoTrashOutline className="ml-2" size={16} color="#ce3d3d" role="button"
                                        onClick={removeProduct}/>
                    </div>
                    <div className="mt-2">Price {product.price} BDT</div>
                </div>

            </div>
            <div className="w-25 text-center">
                <div className="d-flex align-items-center justify-content-center">
                    <IoRemoveCircle size={20}
                                    className={`primary mt-1 ml-1 ${product.quantity <= 1 ? styles.inactive : ''}`}
                                    onClick={decrementAmount} role={product.quantity <= 1 ? "" : "button"}/>
                    <div className={styles.productTitle}>{product.quantity}</div>
                    <IoAddCircle size={20}
                                 className={`primary mt-1 ${product.quantity >= product.stock ? styles.inactive : ''}`}
                                 onClick={incrementAmount} role={product.quantity >= product.stock ? '' : "button"}/>
                </div>
            </div>
            <div className="w-25 mt-1 text-center">
                <div className={`${styles.productTitle} w-75 mx-auto`}>{product.quantity * product.price}</div>
            </div>
        </div>
    )
}
