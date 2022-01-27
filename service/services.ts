import { serviceLinks } from "../constants/serviceLinks";
import { OrderRequest } from "../models/OrderRequest";
import { PagedResponseContent } from "../models/PagedResponseContent";
import { Product } from "../models/Product";
import { createDefaultAxios } from "./axios";
import { OrderSummary } from "../models/OrderSummary";
import { AxiosResponse } from "axios";

const axios = createDefaultAxios();

export const fetchProducts = (
  url: string
): Promise<PagedResponseContent<Product>> =>
  axios.get(url).then((res) => res.data);

export const createNewOrder = async (storeUrlName: string, order: OrderRequest): Promise<AxiosResponse<OrderSummary>> =>
  await axios
    .post(serviceLinks.placeOrder(storeUrlName), order);

export const updateStoreVisited = async(storeUrlName: string): Promise<void> =>
  await axios
    .patch(serviceLinks.storeVisit(storeUrlName));

export const updateProductVisited = async(productId: string): Promise<void> =>
  await axios
    .patch(serviceLinks.productVisit(productId));
