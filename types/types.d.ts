declare module '@types' {
  export interface ProductItemType {
    id: number;
    colour: string;
    name: string;
    price: number;
    img: string;
  }

  export interface CartItemType {
    product: ProductItemType
    count: number
  }
}
