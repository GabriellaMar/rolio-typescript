// import { ProductsList } from "./ProductsList"

import { ProductCategories } from "./ProductCategories";
import { ProductsSlider } from "./ProductsSlider/ProductsSlider";

// import { useState } from "react";


type Product = {
    id: string,
    title: string,
    img: string,
    description: string,
    details: string,
    price: number;
};

type Props = {
    products: Product[],
    
};

export const OurProducts = ({ products }: Props) => {
    console.log(products)
    // const [activeProductId, setActiveProductId] = useState<string | null>(null);
    return (
        <section className="px-5 sm:px-10 pt-40 ">
         <h2 className="xs:mb-4 sm:mb-6 md:mb-8 font-amaticSC font-normal text-4xl text-salat-50 md:font-bold">Наші продукти</h2> 
         <ProductCategories products={products} />
            {/* <ul className="inline-flex gap-4">
                {products.map((product) => (
                    <li key={product.id} className="common-product-style">
                        {product.title}
                    </li>
                ))}
            </ul> */}
            <div className="w-full m-auto border ">
            {/* <h2 className="xs:mb-4 sm:mb-6 md:mb-8 font-amaticSC font-normal text-4xl text-salat-50 md:font-bold">Наші продукти</h2>
            <ul className="inline-flex gap-4">
                {products.map((product) => (
                    <li key={product.id} className="common-product-style">
                        {product.title}
                    </li>
                ))}
            </ul> */}
          
            <  ProductsSlider products={products} />
            {/* {products.map((product) => (
                 <div key={product.id}>
                 <div>SlIde</div>
                 <h2>Масло {product.title}</h2>
                 <p>{product.description}</p>
                 <p>{product.details}</p>
                 <p>Ціна 250мл `{product.price} грн`</p>
             </div>
            ))} */}
          
           </div>
           
        </section>
    )

}
