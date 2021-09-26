import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {IoAddCircle, IoClose, IoRemoveCircle} from "react-icons/io5"
import styles from "../ProductCard.module.scss"

const PLACEHOLDER_DATA = {
    name: 'Headphones',
    featuredImage: "https://picsum.photos/1600/900",
    images: [
        "https://picsum.photos/400/300",
        "https://picsum.photos/800/500",
        "https://picsum.photos/400/400",
        "https://picsum.photos/200/300"
    ],
    description: "This can be used for listening to songs and gaming. Very good. Comes in three sizes- sm, md and L. Add size in note",
    price: '1200',
    stock: "0",
}

type ProductDetails = {
    id: string
    show: boolean
    toggle: () => void
}

export const ProductDetails = (props: ProductDetails) => {
    const {id, show, toggle} = props;
    const [addCount, setAddCount] = useState(0)

    const countIncrement = () => {
        if(addCount < Number(PLACEHOLDER_DATA.stock)) {
            setAddCount(prevState => prevState + 1);
        }
    }

    const countDecrement = () => {
        if(addCount > 0) {
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
                <Modal.Title>{PLACEHOLDER_DATA.name} #{id}</Modal.Title>
                <Button variant="light" onClick={toggle}>
                    <IoClose size={20}/>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <div className="featured-image-container mx-auto mb-3">
                    <img src={PLACEHOLDER_DATA.featuredImage} alt="Featured Image" width="100%" height="100%"/>
                </div>
                <div className="row mx-4">
                    {
                        PLACEHOLDER_DATA.images.map((image, index) => (
                            <div className="col-3 px-1" key={index}>
                                <div className="image-container">
                                    <img src={image} alt="product image" width="100%" height="100%"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-5 d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">In Stock: {PLACEHOLDER_DATA.stock}</h6>
                    <span className="primary font-weight-bold">{PLACEHOLDER_DATA.price} BDT</span>
                </div>
                <div className="mt-2">
                    <span>{PLACEHOLDER_DATA.description}</span>
                </div>
                <Form className="mt-4 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <IoRemoveCircle role="button" size={30} color='#ce3d3d' onClick={countDecrement}/>
                        <Form.Control type="number" min="1" max={PLACEHOLDER_DATA.stock}
                                      className={styles.quantityInput}
                                      aria-label="Quantity Input" aria-describedby="input-field" value={addCount}
                                      onChange={(event) => changeCount(event)}/>
                        <IoAddCircle role="button" size={30} color="green" onClick={countIncrement}/>
                    </div>
                    {
                        Number(PLACEHOLDER_DATA.stock)>0? (
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
