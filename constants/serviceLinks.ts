export const serviceLinks = {
  storeDetails: (storeUrlName: string) => `/store/${storeUrlName}/details`,
  storeProducts: (storeUrlName: string) => `/store/${storeUrlName}/products`,
  storeVisit: (storeUrlName: string) => `/store/${storeUrlName}/visit`,
  productVisit: (productId: string) => `/store/product/${productId}/visit`,
  placeOrder: (storeUrlName: string) => `/orders/store/${storeUrlName}/place`,
};
