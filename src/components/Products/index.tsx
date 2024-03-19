
import { Product } from "@/redux/product/types";
import { ProductCart } from "./ProductCart";
import { motion } from "framer-motion";


type ProductsProps = {
    products: Product[],
};

export const Products: React.FC <ProductsProps> = ({ products }) => {
const flexCenter =  'flex items-center justify-center';

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}



  return (
    <section id='олія' className=" px-5 sm:px-10 md:px-[46px]  pt-10 ">
           <h2 className=" font-amaticSC font-normal text-4xl sm:text-5xl text-text-color md:font-bold text-center">Олія</h2> 
           <motion.ul className={`${flexCenter}  flex-col  flex-wrap  gap-[30px] sm:flex-row  xs:max-w-screen-sm  xs:mt-8 sm:mt-12  md:max-w-screen-md md:flex-nowrap md:gap-5 m-auto`}
             initial='hidden'
             whileInView='visible'
            transition={{duration: 1.5,}}
            variants={list}
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