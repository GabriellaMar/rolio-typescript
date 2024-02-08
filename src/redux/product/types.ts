 export type Product = {
    _id: string,
    title: string,
    img: string,
    description: string,
    details: string,
    price: number,
};


export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'failed',
  }

  export interface IProductSliceState {
    items: Product[];
    status: Status;
}