import React, {useState} from "react";
import {ProductCard} from "./ProductCard";
import {IoSearchOutline} from "react-icons/io5";
import {Product} from "../models/Product";

const PLACEHOLDER_PRODUCTS: Product[] = [
    {
        id: '#EFASD123',
        name: 'Product 1',
        featuredImage: "https://picsum.photos/1600/900",
        images: [
            "https://picsum.photos/400/300",
            "https://picsum.photos/800/500",
            "https://picsum.photos/400/400",
            "https://picsum.photos/200/300"
        ],
        description: "This can be used for listening to songs and gaming. Very good. Comes in three sizes- sm, md and L. Add size in note",
        price: '1200',
        stock: "2",
    },
    {
        id: '#SFDSD213',
        name: 'Product 2',
        featuredImage: "https://picsum.photos/1600/900",
        images: [
            "https://picsum.photos/400/300",
            "https://picsum.photos/800/500",
            "https://picsum.photos/400/400",
            "https://picsum.photos/200/300"
        ],
        description: "This can be used for listening to songs and gaming. Very good. Comes in three sizes- sm, md and L. Add size in note",
        price: '1200',
        stock: "1",
    },
    {
        id: '#RTERW345',
        name: 'Product 3',
        featuredImage: "https://picsum.photos/1600/900",
        images: [
            "https://picsum.photos/400/300",
            "https://picsum.photos/800/500",
            "https://picsum.photos/400/400",
            "https://picsum.photos/200/300"
        ],
        description: "This can be used for listening to songs and gaming. Very good. Comes in three sizes- sm, md and L. Add size in note",
        price: '1200',
        stock: "5",
    },
    {
        id: '#RTERWQ45',
        name: 'Product 4',
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
]

export const ProductContainer = () => {
    const [searchString, setSearchString] = useState('');


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
                {
                    PLACEHOLDER_PRODUCTS.map(product => (
                        <ProductCard key={product.id} id={product.id} name={product.name} price={product.price}
                                     stock={product.stock}
                                     description={product.description} featuredImage={product.featuredImage}
                                     images={product.images}/>
                    ))
                }
            </div>
        </div>
    )
}
