

import { Product } from "@/redux/product/types";



type OffersProps = {
  products: Product[];
};

 export const OfferCategories: React.FC <OffersProps> = ({products}) => {

  return (
    <ul className="flex gap-4 items-center justify-end">
    {products.map((product) => (
      <li key={product._id} className={`common-product-style `}>
        {product.title}
      </li>
    ))}
  </ul>
  )
}