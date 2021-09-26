import React from "react";
import {ProductCard} from "./ProductCard";
import {IoSearchOutline} from "react-icons/io5";

const PLACEHOLDER_PRODUCTS = [
    {
        id: 'ADS123',
        name: 'Product 1',
        price: '500.00',
        imageUrl: 'https://picsum.photos/id/1/200/300',
        stock: "1",
    }
]

export const ProductContainer = () => {
    return (
        <div className="mt-5">
            <h6 className="primary font-weight-bold ">PRODUCTS</h6>
            <div className="input-group mb-3 mt-3">
                <input type="text" className="form-control" placeholder="Search"
                       aria-label="Search Input" aria-describedby="input-field"/>
                <div className="input-group-append">
                    <span className="input-group-text"><IoSearchOutline className="primary" size={20}/></span>
                </div>
            </div>
            <div className="row px-3 mt-2">
                <ProductCard product={PLACEHOLDER_PRODUCTS[0]}/>
                <ProductCard product={PLACEHOLDER_PRODUCTS[0]}/>
                <ProductCard product={PLACEHOLDER_PRODUCTS[0]}/>
                <ProductCard product={PLACEHOLDER_PRODUCTS[0]}/>
            </div>
        </div>
    )
}
