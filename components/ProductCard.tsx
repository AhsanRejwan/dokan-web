import React, {useState} from "react";
import styles from "./ProductCard.module.scss"
import {ProductDetails} from "./modals/ProductDetails";
import {useCartContext} from "../contexts/CartContext";
import {AddToCartForm} from "./AddToCartForm";

type ProductCard = {
    id: string,
    name: string,
    price: string,
    stock: string,
    description: string
    featuredImage: string,
    images: string[]
}

export const ProductCard = (props: ProductCard) => {
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
    const {products, dispatch} = useCartContext();
    const [count, setCount] = useState(0);

    const countIncrement = () => {
        if (count < Number(stock)) {
            setCount(prevState => prevState + 1);
        }
    }

    const countDecrement = () => {
        if (count > 0) {
            setCount(prevState => prevState - 1);
        }
    }

    const changeCount = (value: string) => {
        setCount(Number(value));
    }

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    }

    const addToCart = () => {
        dispatch({
            type: "add",
            product: {id: id, name: name, description: description, price: price, quantity: count.toString()}
        })
    }

    console.log(products);

    return (
        <div className="col-12 col-sm-6 col-md-3 px-2">
            <div className={`${styles.productContainer} py-3 px-4 d-flex flex-column align-items-center`}>
                <div className="image-container">
                    <img src={featuredImage} alt={"Product Image"} width="100%" height="100%"/>
                </div>
                <span className="mt-3 font-weight-bold text-break text-center">{name.toUpperCase()}</span>
                <span className="primary">{price} BDT</span>
                <span className="font-weight-bold text-break text-center">In Stock: {stock}</span>
                <button type="button" className="btn btn-link shadow-none" onClick={toggleModal}>
                    <span className="primary font-weight-bold">View More</span>
                </button>
                <AddToCartForm alignment={"column"} stock={stock} count={count.toString()} increment={countIncrement}
                               decrement={countDecrement} change={changeCount} addToCart={addToCart}/>
                <ProductDetails id={id} name={name} price={price}
                                stock={stock}
                                description={description} featuredImage={featuredImage}
                                images={images} show={showModal} toggle={toggleModal}/>
            </div>
        </div>
    )
}
