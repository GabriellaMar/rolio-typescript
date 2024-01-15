import { Product } from "./Product";


type Product = {
    id: string,
    title: string,
    img: string,
    description: string,
    details: string,
    price?: number,
    // category: ProductCategory,
};

type Props = {
    products: Product[],
    
};

export const Products = ({ products }: Props) => {
  return (
    <section className="pt-20">
           <h2 className="xs:mb-4 sm:mb-6 md:mb-8 font-amaticSC font-normal text-4xl text-text-color md:font-bold text-center">Масло</h2> 
           <ul className="sm:flex  items-center gap-[30px] text-center">
           {products.map((product)=>
           <Product 
           id={product.id}
           title={product.title}
           img={product.img}
           description = {product.description}
           details={product.details}
           price={product.price}
           />
           )}
           </ul>
        
           

    </section>
  )
}