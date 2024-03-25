
import { Product } from "@/redux/product/types";
import { ProductCart } from "./ProductCart";
import { motion } from "framer-motion";


type ProductsProps = {
    products: Product[],
};

export const Products: React.FC <ProductsProps> = ({ products }) => {
const flexCenter =  'flex items-center justify-center';

  return (
    <section id='олія' className=" xs:px-5 sm:px-10 md:px-[46px]  pt-10 m-auto">
           <h2 className=" font-amaticSC font-normal text-4xl sm:text-5xl text-text-color md:font-bold text-center">Олія</h2> 
           <motion.ul className={`${flexCenter}  flex-col  flex-wrap  gap-[30px] sm:flex-row  xs:max-w-screen-sm  xs:mt-8 sm:mt-12  md:max-w-screen-md md:flex-nowrap md:gap-5 m-auto`}
             initial='hidden'
             whileInView='visible'
             viewport={{ once: true, amount: 0.5 }}
             transition={{duration: 1}}
             variants={{
               hidden: { opacity: 0, y: 30 },
               visible: { opacity: 1, y: 0 },
             }}
           >
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
           </motion.ul>
    </section>
  )
}