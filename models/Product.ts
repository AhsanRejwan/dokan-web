import { ImageData } from "./ImageData";

export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  featuredImage?: ImageData;
  images: ImageData[];
}
