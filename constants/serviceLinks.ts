export const serviceLinks = {
  storeDetails: (storeUrlName: string) => `/store/${storeUrlName}/details`,
  storeProducts: (storeUrlName: string) => `/store/${storeUrlName}/products`,
  placeOrder: (storeUrlName: string) => `/orders/store/${storeUrlName}/place`,
};
