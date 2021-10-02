import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {IoClose} from "react-icons/io5"
import {AddToCartForm} from "../AddToCartForm";
import {useCartContext} from "../../contexts/CartContext";
import {useAlertContext} from "../../contexts/AlertContext";

type ProductDetails = {
    id: string,
    name: string,
    price: string,
    stock: string,
    description: string
    featuredImage: string,
    images: string[]
    show: boolean
    toggle: () => void
}

export const ProductDetails = (props: ProductDetails) => {
    const {id, name, price, stock, description, featuredImage, images, show, toggle} = props;
    const [count, setCount] = useState(0);

    const {products, cartDispatch} = useCartContext();
    const {alertDispatch} = useAlertContext()

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

    const addToCart = () => {
        if(count <= Number(stock) && count >0) {
            cartDispatch({
                type: "add",
                product: {id: id, name: name, description: description, price: price, quantity: count.toString()}
            })
        } else {
            alertDispatch({
                type: "show",
                content: {type:"danger", message:"There isn't enough products in stock"}
            })
        }
        changeCount("0");
    }

    console.log(products);

    return (
        <Modal show={show} onHide={toggle} animation={false}>
            <Modal.Header>
                <Modal.Title>{name}</Modal.Title>
                <Button variant="light" onClick={toggle}>
                    <IoClose size={20}/>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <div className="featured-image-container mx-auto mb-3">
                    <img src={featuredImage} alt="Featured Image" width="100%" height="100%"/>
                </div>
                <div className="row mx-4">
                    {
                        images.map((image, index) => (
                            <div className="col-3 px-1" key={index}>
                                <div className="image-container">
                                    <img src={image} alt="product image" width="100%" height="100%"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-5 d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">In Stock: {stock}</h6>
                    <span className="primary font-weight-bold">{price} BDT</span>
                </div>
                <div className="mt-2">
                    <span>{description}</span>
                </div>
                <AddToCartForm stock={stock} count={count.toString()} increment={countIncrement}
                               decrement={countDecrement} changeValue={changeCount} addToCart={addToCart}/>
            </Modal.Body>
        </Modal>
    );
}
