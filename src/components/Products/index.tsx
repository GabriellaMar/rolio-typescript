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

type ProductsProps = {
    products: Product[],
    
};

export const Products: React.FC <ProductsProps> = ({ products }) => {
  // const flexCenter = "flex items-center justify-center "
  return (
    <section id='масло' className="pt-20 pb-6 px-5 sm:px-10 md:px-[50px]   ">
           <h2 className=" font-amaticSC font-normal text-4xl text-text-color md:font-bold text-center">Масло</h2> 
           <ul className={` m-auto flex flex-col  flex-wrap  gap-[30px] sm:flex-row  xs:max-w-screen-sm  xs:mt-4 sm:mt-6 md:mt-8  md:max-w-screen-md md:flex-nowrap md:gap-5`}  >
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