import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {IoClose} from "react-icons/io5";
import {useAlertContext} from "../../contexts/AlertContext";
import {useCartContext} from "../../contexts/CartContext";
import {AddToCartForm} from "../AddToCartForm";
import {updateProductVisited} from "../../service/services";
import {Product} from "../../models/Product";

interface ProductDetailsProps extends Product {
  show: boolean;
  toggle: () => void;
}

export const ProductDetails = (props: ProductDetailsProps) => {
  const {
    id,
    name,
    price,
    quantity,
    description,
    featuredImage,
    images,
    show,
    toggle,
  } = props;
  const [count, setCount] = useState(0);

  const { cartDispatch } = useCartContext();
  const { alertDispatch } = useAlertContext();

  const countIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const countDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const changeCount = (value: number) => {
    setCount(value);
  };

  const addToCart = () => {
    let numberCount = count;
    if (numberCount <= quantity && numberCount > 0) {
      cartDispatch({
        type: "add",
        product: {
          id: id,
          name: name,
          description: description,
          price: price,
          quantity: quantity,
          featuredImage: featuredImage,
          numberOrdered: numberCount,
        },
      });
      alertDispatch({
        type: "show",
        content: {
          type: "success",
          message: `Successfully added to cart`,
        },
      });
    } else {
      alertDispatch({
        type: "show",
        content: {
          type: "danger",
          message: `Please enter a valid quantity to add to cart`,
        },
      });
    }
  };

  useEffect(() => {
    if(show) {
      updateProductVisited(id)
        .then()
        .catch(() => console.error('Product visit api called'));
    }
  }, [id, show])

  return (
    <Modal show={show} onHide={toggle} animation={false}>
      <Modal.Header>
        <Modal.Title>{name}</Modal.Title>
        <Button variant="light" onClick={toggle}>
          <IoClose size={20} />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div className="featured-image-container mx-auto mb-3">
          <img
            src={featuredImage?.url || "/placeholder.png"}
            alt="Featured Image"
          />
        </div>
        <div className="row mx-4">
          {images.map((image, index) => (
            <div className="col-3 px-1" key={index}>
              <div className="image-container">
                <img
                  src={image?.url || "/placeholder.png"}
                  alt="Product image"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 d-flex justify-content-between align-items-center">
          <h6 className="mb-0">In Stock: {quantity}</h6>
          <span className="primary font-weight-bold">{price} BDT</span>
        </div>
        <div className="mt-2">
          <span>{description}</span>
        </div>
        <AddToCartForm
          stock={quantity}
          count={count}
          increment={countIncrement}
          decrement={countDecrement}
          changeValue={changeCount}
          addToCart={addToCart}
        />
      </Modal.Body>
    </Modal>
  );
};
