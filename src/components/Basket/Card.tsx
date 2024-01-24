import { ProductCounter } from "../ProductCounter/ProductCounter"
import { XCircleIcon } from "@heroicons/react/24/outline";

type Product = {
    id: string,
    img: string,
    title: string,
    description?: string,
    details?: string,
    price?: number,
    // category: ProductCategory,
};

// type CardProps = {
//     products: Product[],
// };


 export const Card: React.FC <Product> = ({id, title, img, price})=>{
    const flexCenter = 'flex items-center justify-center'
    return (
       <li key={id} className={`bg-light-grey-50 w-full h-[154px] mt-4 py-4 px-[56px] `}>
        <div className={` ${flexCenter}  gap-4`}>
            <h3 className="mt-4"> Масло "{title}"</h3>
            <p>250мл</p>
        </div>
        <div className={`${flexCenter} justify-between`}>
        <div className="border rounded border-salat-50 w-[168px] h-[90px] ">
            <img  src={img} className="object-cover w-[100%]" />
        </div>
        <ProductCounter title={title} marginTop={8} position='' btnSize={8} fontSize="2xl"/>
        <p>{price} грн</p>
        <button>
                        <XCircleIcon className="h-8 w-8 text-salat-50" />
                    </button>
        </div>
       </li> 
    )

    
 }