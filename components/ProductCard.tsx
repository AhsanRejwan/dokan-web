import React, {useState} from "react";
import styles from "./ProductCard.module.scss"
import {ProductDetails} from "./modals/ProductDetails";

type ProductCard = {
    product: {
        id: string,
        name: string,
        price: string,
        imageUrl: string,
        stock: string
    }
}

export const ProductCard = (props: ProductCard) => {
    const {product} = props;
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    }

    return (
        <div className="col-12 col-sm-6 col-md-3 px-2">
            <div className={`${styles.productContainer} py-3 px-4 d-flex flex-column align-items-center`}>
                <div className="image-container">
                    <img src={product.imageUrl} alt={"Product Image"} width="100%" height="100%"/>
                </div>
                <span className="mt-3 font-weight-bold text-break text-center">{product.name.toUpperCase()}</span>
                <span className="font-weight-bold text-break text-center">#{product.id}</span>
                <span className="primary">{product.price} BDT</span>
                {
                    Number(product.stock) > 0 ?  <span className="font-weight-bold text-break text-center">In Stock: {product.stock}</span> : null
                }
                <button type="button" className="btn btn-link shadow-none" onClick={toggleModal}>
                    <span className="primary font-weight-bold">View More</span>
                </button>
                {
                    Number(product.stock) > 0 ? (
                        <button type="button" className="btn colored-button">
                            ADD TO CART
                        </button>
                    ) : (
                        <button disabled type="button" className={`${styles.noStockButton} btn`}>
                            OUT OF STOCK
                        </button>
                    )
                }
                <ProductDetails id={product.id} show={showModal} toggle={toggleModal}/>
            </div>
        </div>
    )
}
