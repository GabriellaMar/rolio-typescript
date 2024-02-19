// import { ProductTitle } from "@/shared/types";
// import { ProductCounter } from "../ProductCounter"
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { selectBasketItem } from "@/redux/basket/selectors";
import { BasketItem } from "@/redux/basket/types";
import { removeBasketItemThunk } from "@/redux/operations";
import { Product } from "@/redux/product/types";
import { XCircleIcon } from "@heroicons/react/24/outline";
// import { useSelector } from "react-redux";

// type Product = {
//     id: string,
//     img: string,
//     title: string,
//     description?: string,
//     details?: string,
//     price: number,
//     //  addProduct: number;
  
// };

// type CardProps = {
//     products: Product[],
// };


export const Card: React.FC = ( { title, img, price, quantity, productId}) => {
    // const {basketItems} = useSelector(selectBasketItem);
    // console.log("basketItems ITEMS:", basketItems)
    const flexCenter = 'flex items-center justify-center'
    const flexBetween = 'flex items-center justify-between'
    const dispatch = useAppDispatch();

const handleRemoveBasketItem =()=>{
        dispatch(removeBasketItemThunk(productId))
    }
    
    return (
        <li  className={`bg-light-grey-50 w-full h-[154px] mt-4 py-4 px-[56px] `}>
            <div className={` ${flexCenter} ml-12 gap-4`}>
                <h3 className=" font-roboto text-sm text-salat-50 font-normal"> Масло "{title}"</h3>
                <span className=" font-roboto text-2xs text-text-color font-light">250мл</span>
            </div>
            <div className={`${flexBetween} `}>
                <div className="border rounded border-salat-50 w-[168px] h-[90px] ">
                    <img src={`http://localhost:8000/${img}`} className="object-cover " />
                </div>
                {/* <ProductCounter title={title} marginTop={0} position='' btnSize={8} fontSize="2xl" id={id} /> */}
                <div className='flex gap-8 '>
                    <p>{price} грн</p>
                    <p>{quantity} </p>
                    <button>
                        <XCircleIcon className="h-6 w-6 text-text-color hover:text-salat-50" onClick={()=>handleRemoveBasketItem(productId)}/>
                    </button>
                </div>
            </div>
        </li>
    )


}