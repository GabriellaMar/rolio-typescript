// import { ProductTitle } from "@/shared/types";
import { ProductCounter } from "../ProductCounter"
import { XCircleIcon } from "@heroicons/react/24/outline";

type Product = {
    id: string,
    img: string,
    title: string,
    description?: string,
    details?: string,
    price: number,
    //  addProduct: number;
  
};

// type CardProps = {
//     products: Product[],
// };


export const Card: React.FC<Product> = ({ id, title, img, price}) => {
    const flexCenter = 'flex items-center justify-center'
    const flexBetween = 'flex items-center justify-between'
    return (
        <li key={id} className={`bg-light-grey-50 w-full h-[154px] mt-4 py-4 px-[56px] `}>
            <div className={` ${flexCenter} ml-12 gap-4`}>
                <h3 className=" font-roboto text-sm text-salat-50 font-normal"> Масло "{title}"</h3>
                <span className=" font-roboto text-2xs text-text-color font-light">250мл</span>
            </div>
            <div className={`${flexBetween} `}>
                <div className="border rounded border-salat-50 w-[168px] h-[90px] ">
                    <img src={img} className="object-cover " />
                </div>
                <ProductCounter title={title} marginTop={0} position='' btnSize={8} fontSize="2xl" id={id} />
                <div className='flex gap-8 '>
                    <p>{price} грн</p>
                    <button>
                        <XCircleIcon className="h-6 w-6 text-text-color hover:text-salat-50" />
                    </button>
                </div>
            </div>
        </li>
    )


}