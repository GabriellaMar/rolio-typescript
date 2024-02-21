// import { ProductTitle } from "@/shared/types";
// import { ProductCounter } from "../ProductCounter"

import { BasketItem } from "@/redux/basket/types";

import { XCircleIcon } from "@heroicons/react/24/outline";
import { ProductCounter } from "../ProductCounter";
// import { useState } from "react";
// import { useSelector } from "react-redux";


type CardProps = BasketItem & {
    onDelete: (productId: string) => void;
    quantity: number;
};

export const Card: React.FC<CardProps> = ( { title, img, price, quantity, productId, onDelete }) => {

    const flexCenter = 'flex items-center justify-center'
    const flexBetween = 'flex items-center justify-between'


    
    return (
        <li  className={`bg-light-grey-50 w-full h-[154px] mt-4 py-4 px-[56px] `}>
            <div className={` ${flexCenter} ml-12 gap-4`}>
                <h3 className=" font-roboto text-sm text-salat-50 font-normal"> Масло "{title}"</h3>
                <span className=" font-roboto text-2xs text-text-color font-light">250мл</span>
            </div>
            <div className={`${flexBetween} `}>
                <div className="border rounded border-salat-50 w-[168px] h-[90px] ">
                    {/* <img src={`http://localhost:8000/${img}`} className="object-cover " /> */}
                    <img  src={`https://rolio-backend-api.onrender.com/${img}`} className="object-cover " />
                </div>
                 <ProductCounter title={title} marginTop={0} position='' btnSize={8} fontSize="2xl"  addedQuantity={ quantity }/> 
                <div className='flex gap-8 '>
                    <p>{price} грн</p>
                    <button type="button">
                        <XCircleIcon className="h-6 w-6 text-text-color hover:text-salat-50" 
                           onClick={() => onDelete(productId)}
                        />
                    </button>
                </div>
            </div>
        </li>
    )


}