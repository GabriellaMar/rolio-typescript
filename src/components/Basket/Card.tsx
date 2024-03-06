// import { ProductTitle } from "@/shared/types";
// import { ProductCounter } from "../ProductCounter"

import { BasketItem } from "@/redux/basket/types";

import { XCircleIcon } from "@heroicons/react/24/outline";
import { ProductCounter } from "../ProductCounter";
import useMediaQuery from "@/hooks/useMediaQuery";
// import { useState } from "react";
// import { useSelector } from "react-redux";


type CardProps = BasketItem & {
    onDelete: (_id: string) => void;
    quantity: number;
};

export const Card: React.FC<CardProps> = ({ title, img, price, quantity, _id, onDelete }) => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const flexCenter = 'flex items-center justify-center'
    const flexBetween = 'flex items-center justify-between'



    return (
        <li className={`bg-light-grey-50 w-full py-4  px-4 sm:px-[46px] `}>
            <div className={` ${flexCenter}  gap-4`}>
                <h3 className=" font-roboto  text-base text-salat-50 font-normal"> Олія "{title}"</h3>
                <span className=" font-roboto text-s text-text-color font-light">250мл</span>
            </div>
            <div className={`${flexBetween} relative`}>
                {/* <div className='flex xs:flex-col sm:flex-row justify-between'> */}
                <div className="border rounded border-salat-50  bg-white max-w-[164px] mr-3 mt-4">
                    {/* <img src={`http://localhost:8000/${img}`} className="object-cover " /> */}
                    <img src={`https://rolio-backend-api.onrender.com/${img}`} className="object-cover " />
                </div>
                <ProductCounter title={"Для салату"} marginTop={0} position='' btnSize={8} fontSize="2xl" addedQuantity={quantity} _id={_id} />
                {/* </div> */}
                <div className={`flex gap-4 sm:gap-8`}>
                    <p className="text-text-color ml-6">
                        <span className="inline-block text-salat-50  mr-2 text-2xl">{price}</span>
                        грн</p>
                    <button type="button" className={`${isAboveSmallScreens ? `static ` : `absolute -top-5 right-0`}`}>
                        <XCircleIcon className="h-6 w-6 text-text-color clear-hover "
                            onClick={() => onDelete(_id)}
                        />
                    </button>
                </div>
            </div>
        </li>
    )


}