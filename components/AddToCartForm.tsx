import React from "react";
import {IoAddCircle, IoRemoveCircle} from "react-icons/io5";
import {Form} from "react-bootstrap";
import styles from "./ProductCard.module.scss";

type AddToCartForm = {
    alignment?: "row" | "column"
    stock: string,
    count: string
    increment: () => void,
    decrement: () => void,
    change: (value: string) => void,
    addToCart: () => void
}

export const AddToCartForm = (props: AddToCartForm) => {
    const {alignment = "row", stock, count, increment, decrement, change, addToCart} = props;

    const buttonClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        change("0");
    }

    return (
        <Form
            className={`d-flex justify-content-between align-items-center ${alignment === 'column' ? 'flex-column mt-2' : 'mt-4 '}`}>
            <div className={`d-flex align-items-center ${alignment === 'column' ? 'mb-2' : ''}`}>
                <IoRemoveCircle role="button" size={30} color='#ce3d3d' onClick={decrement}/>
                <Form.Control type="number" min="1" max={stock}
                              className={styles.quantityInput}
                              aria-label="Quantity Input" aria-describedby="input-field" value={count}
                              onChange={(event) => change(event.currentTarget.value)}/>
                <IoAddCircle role="button" size={30} color="green" onClick={increment}/>
            </div>
            {
                Number(stock) > 0 ? (
                    <button type="submit" className="btn colored-button" onClick={(event) => buttonClicked(event)}>
                        ADD TO CART
                    </button>
                ) : (
                    <button disabled type="submit" className={`${styles.noStockButton} btn`}>
                        OUT OF STOCK
                    </button>
                )
            }
        </Form>
    )
}
