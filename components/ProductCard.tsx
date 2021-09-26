import React, {useState} from "react";
import styles from "./ProductCard.module.scss"
import {ProductDetails} from "./modals/ProductDetails";
import {Product} from "../models/Product";

export const ProductCard = (props: Product) => {
    const {
        id,
        name,
        description,
        price,
        stock,
        featuredImage,
        images
    } = props;

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    }

    return (
        <div className="col-12 col-sm-6 col-md-3 px-2">
            <div className={`${styles.productContainer} py-3 px-4 d-flex flex-column align-items-center`}>
                <div className="image-container">
                    <img src={featuredImage} alt={"Product Image"} width="100%" height="100%"/>
                </div>
                <span className="mt-3 font-weight-bold text-break text-center">{name.toUpperCase()}</span>
                <span className="font-weight-bold text-break text-center">#{id}</span>
                <span className="primary">{price} BDT</span>
                <span className="font-weight-bold text-break text-center">In Stock: {stock}</span>
                <button type="button" className="btn btn-link shadow-none" onClick={toggleModal}>
                    <span className="primary font-weight-bold">View More</span>
                </button>
                {
                    Number(stock) > 0 ? (
                        <button type="button" className="btn colored-button">
                            ADD TO CART
                        </button>
                    ) : (
                        <button disabled type="button" className={`${styles.noStockButton} btn`}>
                            OUT OF STOCK
                        </button>
                    )
                }
                <ProductDetails id={id} name={name} price={price}
                                stock={stock}
                                description={description} featuredImage={featuredImage}
                                images={images} show={showModal} toggle={toggleModal}/>
            </div>
        </div>
    )
}
