import { OrderProduct } from "./OrderProduct";

export type OrderRequest = {
  name: string;
  address: string;
  phone: string;
  notes: string;
  deliveryMethod: string;
  paymentMethod: string;
  totalPrice: number;
  totalQuantity: number;
  products: OrderProduct[];
};
