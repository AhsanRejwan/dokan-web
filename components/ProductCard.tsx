import React, {useState} from "react";
import {useAlertContext} from "../contexts/AlertContext";
import {useCartContext} from "../contexts/CartContext";
import {Product} from "../models/Product";
import {AddToCartForm} from "./AddToCartForm";
import {ProductDetails} from "./modals/ProductDetails";
import styles from "./ProductCard.module.scss";

interface ProductCardProps extends Product {}

export const ProductCard = (props: ProductCardProps) => {
  const { id, name, description, price, quantity, featuredImage, images } =
    props;

  const [showModal, setShowModal] = useState(false);
  const { products, cartDispatch } = useCartContext();
  const { alertDispatch } = useAlertContext();
  const quantityInCart = products.find(
    (product) => product.id === id
  )?.numberOrdered;
  const [count, setCount] = useState(quantityInCart ? quantityInCart : 0);

  const countIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const countDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const changeCount = (value: number) => {
    setCount(value);
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
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

  return (
    <div className="col-12 col-sm-6 col-md-3 px-2">
      <div
        className={`${styles.productContainer} py-3 px-4 d-flex flex-column align-items-center`}
      >
        <div className="image-container">
          <img
            src={featuredImage?.url || "/placeholder.png"}
            alt="Product Image"
          />
        </div>
        <span className="mt-3 font-weight-bold text-break text-center">
          {name.toUpperCase()}
        </span>
        <span className="primary">{price} BDT</span>
        <span className="font-weight-bold text-break text-center">
          In Stock: {quantity}
        </span>
        <button
          type="button"
          className="btn btn-link shadow-none"
          onClick={toggleModal}
        >
          <span className="primary font-weight-bold">View More</span>
        </button>
        <AddToCartForm
          alignment={"column"}
          stock={quantity}
          count={count}
          increment={countIncrement}
          decrement={countDecrement}
          changeValue={changeCount}
          addToCart={addToCart}
        />
        {
          showModal &&
          <ProductDetails
              id={id}
              name={name}
              price={price}
              quantity={quantity}
              description={description}
              featuredImage={featuredImage}
              images={images}
              show={showModal}
              toggle={toggleModal}
          />
        }
      </div>
    </div>
  );
};
