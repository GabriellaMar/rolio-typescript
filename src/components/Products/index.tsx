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
    <section id='масло' className="pt-20 pb-6 px-5 sm:px-10 md:px-[50px]">
           <h2 className=" font-amaticSC font-normal text-4xl text-text-color md:font-bold text-center">Масло</h2> 
           <ul className="sm:flex  items-center gap-[30px] text-center xs:mt-4 sm:mt-6 md:mt-8">
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