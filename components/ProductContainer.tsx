import React, {useState} from "react";
import {ProductCard} from "./ProductCard";
import {IoSearchOutline} from "react-icons/io5";
import {Product} from "../models/Product";
import {Form} from "react-bootstrap";

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
        id: 'SFDSD213',
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
        id: 'RTERW345',
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
    const [productList, setProductList] = useState<Product[]>(PLACEHOLDER_PRODUCTS);
    const [filteredList, setFilteredList] = useState<Product[]>(PLACEHOLDER_PRODUCTS);
    const [searchString, setSearchString] = useState('');

    const searchProducts = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let newList = productList.filter(item => item.name.toLowerCase().includes(e.currentTarget.value.toLowerCase()));
        setSearchString(e.currentTarget.value);
        setFilteredList(newList);
    }

    return (
        <div className="mt-5">
            <h6 className="primary font-weight-bold">PRODUCTS</h6>
            <Form>
                <div className="input-group mb-3 mt-3">
                    <Form.Control type="text" className="form-control" placeholder="Search"
                                  aria-label="Search Input" aria-describedby="input-field" value={searchString}
                                  onChange={(event) => searchProducts(event)}/>
                    <div className="input-group-append">
                        <span className="input-group-text"><IoSearchOutline className="primary" size={20}/></span>
                    </div>
                </div>
            </Form>
            <div className="row px-3 mt-2">
                {
                    filteredList.map(product => (
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
