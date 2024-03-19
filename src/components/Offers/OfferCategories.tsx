

import { Product } from "@/redux/product/types";







type SliderProps = {
   sliderProducts: Product[];
   borderColor: string;
   textColor: string;
   bgColor: string;
   activeSlide: string;
};

 export const OfferCategories: React.FC <SliderProps> = ({ sliderProducts, borderColor, textColor,  bgColor, activeSlide}) => {
  // const categoriesRef = useRef(null);
  

  return (
    <ul className={`flex flex-wrap gap-4 items-center  xs:justify-center md:justify-start  sm:m-auto md:ml-[44%] `} >
    {sliderProducts.map((product) => (
     <li key={product._id}  className={` border px-4 py-2 xs:min-w-[125px] md:min-w-[143px] text-center font-normal text-lg ${borderColor} ${textColor}  ${activeSlide === product._id ? `${bgColor}` : ''}`}
     >
            {product.title}
       
      </li>
    ))}
  </ul>
  )
}