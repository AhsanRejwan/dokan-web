import { PagedResponseContent } from './../models/PagedResponseContent';
import { Product } from './../models/Product';
import { createDefaultAxios } from "./axios";

const axios = createDefaultAxios();

export const fetchProducts = (url: string): Promise<PagedResponseContent<Product>> => axios.get(url).then((res) => res.data);
