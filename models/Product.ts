export class Product {
    static readonly EMPTY = new Product('', '', 0, 0, '', '', []);

    constructor(
        public id: string,
        public name: string,
        public price: number,
        public stock: number,
        public description: string,
        public featuredImage: string,
        public images: string[]
    ) {
    }
}
