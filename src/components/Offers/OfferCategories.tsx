

import { Product } from "@/redux/product/types";




type SliderProps = {
   sliderProducts: Product[];
};

 export const OfferCategories: React.FC <SliderProps> = ({ sliderProducts}) => {

  return (
    <ul className="flex gap-4 items-center  w-1/2  m-auto">
    {sliderProducts.map((product) => (
      <li key={product._id} className={`common-product-style `}>
        {product.title}
      </li>
    ))}
  </ul>
  )
}