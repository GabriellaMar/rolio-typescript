
import { Product } from "@/redux/product/types";
import { ProductCart } from "./ProductCart";



type ProductsProps = {
    products: Product[],
};

export const Products: React.FC <ProductsProps> = ({ products }) => {
const flexCenter =  'flex items-center justify-center';

  return (
    <section id='олія' className=" px-5 sm:px-10 md:px-[46px]  pt-10 ">
           <h2 className=" font-amaticSC font-normal text-4xl sm:text-5xl text-text-color md:font-bold text-center">Олія</h2> 
           <ul className={`${flexCenter}  flex-col  flex-wrap  gap-[30px] sm:flex-row  xs:max-w-screen-sm  xs:mt-8 sm:mt-12  md:max-w-screen-md md:flex-nowrap md:gap-5 m-auto`}  >
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