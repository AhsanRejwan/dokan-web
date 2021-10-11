import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { Form } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import useQuery from "swr";
import { serviceLinks } from "../constants/serviceLinks";
import { Product } from "../models/Product";
import { fetchProducts } from "../service/services";
import { ProductCard } from "./ProductCard";

export const ProductContainer = () => {
  const [searchString, setSearchString] = useState("");
  const { storeId } = useRouter().query;
  const storeUrl = typeof storeId === "string" ? storeId : "";
  const { data: pagedProducts } = useQuery(
    serviceLinks.storeProducts(storeUrl),
    fetchProducts
  );

  const filteredList = useMemo(() => {
    if (!searchString) {
      return pagedProducts?.content || [];
    } else {
      return (pagedProducts?.content || []).filter((product) =>
        product.name.toLowerCase().includes(searchString.toLowerCase())
      );
    }
  }, [pagedProducts?.content, searchString]);

  return (
    <div className="mt-5">
      <h6 className="primary font-weight-bold">PRODUCTS</h6>
      <Form>
        <div className="input-group mb-3 mt-3">
          <Form.Control
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search Input"
            aria-describedby="input-field"
            value={searchString}
            onChange={(event) => setSearchString(event.target.value || "")}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <IoSearchOutline className="primary" size={20} />
            </span>
          </div>
        </div>
      </Form>
      <div className="row px-3 mt-2">
        {filteredList.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            description={product.description}
            featuredImage={product.featuredImage}
            images={product.images}
          />
        ))}
      </div>
    </div>
  );
};
