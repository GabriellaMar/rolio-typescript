import { getBorderColor } from "@/services/services";
import { ProductCounter } from "../ProductCounter/ProductCounter";


type Props = {
    id: string,
    title: string,
    img: string,
    description: string,
    details?: string,
    price?: number,
    // category: ProductCategory,
};

// type Props = {
//     products: Product[],
    
// };

export const Product = ({ id, details, title, description, img, price }: Props) => {
  return (
   <li key={id} className="w-full">
    <img src={img} alt="bottle of Oil" className="inline-block m-auto" />
    <h2 className={`font-amaticSC font-bold text-1xl  text-${getBorderColor(title)} `}>Масло "{title}"</h2>
    <p className="font-roboto font-light text-xxs sm:text-xs  text-text-color ">{description}</p>
     <p className="font-roboto font-light text-xxs sm:text-xs  text-text-color ">{details}</p>
     <ProductCounter  title={title} />
     <p className={`text-${getBorderColor(title)}`}>{`250мл ${price} грн`}</p>
   </li>
  )
}