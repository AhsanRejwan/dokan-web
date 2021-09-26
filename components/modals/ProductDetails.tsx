import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {IoAddCircle, IoClose, IoRemoveCircle} from "react-icons/io5"
import styles from "../ProductCard.module.scss"

type ProductDetails = {
    id: string
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
    const [addCount, setAddCount] = useState(0)

    const countIncrement = () => {
        if (addCount < Number(stock)) {
            setAddCount(prevState => prevState + 1);
        }
    }

    const countDecrement = () => {
        if (addCount > 0) {
            setAddCount(prevState => prevState - 1);
        }
    }

    const changeCount = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(Number(e.currentTarget.value));
        setAddCount(Number(e.currentTarget.value));
    }

    return (
        <Modal show={show} onHide={toggle} animation={false}>
            <Modal.Header>
                <Modal.Title>{name} #{id}</Modal.Title>
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
                <Form className="mt-4 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <IoRemoveCircle role="button" size={30} color='#ce3d3d' onClick={countDecrement}/>
                        <Form.Control type="number" min="1" max={stock}
                                      className={styles.quantityInput}
                                      aria-label="Quantity Input" aria-describedby="input-field" value={addCount}
                                      onChange={(event) => changeCount(event)}/>
                        <IoAddCircle role="button" size={30} color="green" onClick={countIncrement}/>
                    </div>
                    {
                        Number(stock) > 0 ? (
                            <button type="submit" className="btn colored-button">
                                ADD TO CART
                            </button>
                        ) : (
                            <button disabled type="submit" className={`${styles.noStockButton} btn`}>
                                OUT OF STOCK
                            </button>
                        )
                    }
                </Form>
            </Modal.Body>
        </Modal>
    );
}
