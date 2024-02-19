
import { Product } from "@/redux/product/types";
import { ProductCart } from "./ProductCart";



type ProductsProps = {
    products: Product[],
};

export const Products: React.FC <ProductsProps> = ({ products }) => {
console.log(products)

  return (
    <section id='масло' className="pt-20 pb-6 px-5 sm:px-10 md:px-[50px]   ">
           <h2 className=" font-amaticSC font-normal text-4xl text-text-color md:font-bold text-center">Масло</h2> 
           <ul className={` m-auto flex flex-col  flex-wrap  gap-[30px] sm:flex-row  xs:max-w-screen-sm  xs:mt-4 sm:mt-6 md:mt-8  md:max-w-screen-md md:flex-nowrap md:gap-5`}  >
           {products.map((product)=> 
           <ProductCart
            key={product._id}
           _id={product._id}
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