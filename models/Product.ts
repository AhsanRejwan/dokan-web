export class Product {
    static readonly EMPTY = new Product('', '', '', '', '', '', []);

    constructor(
        public id: string,
        public name: string,
        public price: string,
        public stock: string,
        public description: string,
        public featuredImage: string,
        public images: string[]
    ) {
    }
}
