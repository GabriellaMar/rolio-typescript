import { Product } from "@/redux/product/types";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { Buttons } from "../Buttons";
import { BackgroundColor, ProductColor } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ProductCounter } from "../ProductCounter";
import { useSelector } from "react-redux";
import { selectBasketItemById } from "@/redux/basket/selectors";
import { addBasketItemThunk } from "@/redux/operations";
import { useAppDispatch } from "@/hooks/useAppDispatch";



// type SliderProps = {
//     products: Product[];
// };

const SliderCard: React.FC<Product> = ({ _id, title, img, description, details }) => {
    const [foundProductId, setFoundProductId] = useState<string | null>(null);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1366px)");
    const isMobileScreen = useMediaQuery("(min-width: 320px)");
    const dispatch = useAppDispatch();

    const basketItem = useSelector(selectBasketItemById(_id));

    const addedQuantity = basketItem ? basketItem.quantity : 0;

    const flexCenter = "flex items-center justify-center";
    const flexStart = "flex items-center justify-start"


    const showDetails = (productId: string) => {
        setFoundProductId(foundProductId === productId ? null : productId);
    };

    const handleAddToBasket = () => {
        const product = { _id: _id, quantity: 1 };
        dispatch(addBasketItemThunk(product));
    };

    const productColor = ProductColor[title as keyof typeof ProductColor] || 'gray';

    const backgroundColor = BackgroundColor[title as keyof typeof ProductColor] || 'gray';

    return (

        <li key={_id} className="mt-8 relative">
            <div className={`${flexCenter} xs:flex-col md:flex-row  xs:gap-4 md:gap-16`}>
                <div className={`   relative ${flexCenter}`}>
                    <div className={`m-auto xs:w-s xs:h-s sm:w-lg sm:h-lg  rounded-full  ${backgroundColor}`}>
                        <div className={`  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  xs:w-xs xs:h-xs sm:w-sm sm:h-sm  rounded-full  bg-gradient-to-r ${productColor}`} >
                            <img src={`https://rolio-backend-api.onrender.com/${img}`} alt="bottle of Oil"
                                className={`  inline-block  ${isMobileScreen ? 'not-scaled-img  absolute top-1/2 left-1/2' : 'scaled-img  absolute top-1/2 left-1/2'} `}
                            />
                        </div>
                    </div>
                </div>
                <div className="max-w-[609px]">
                    <h2 className="font-amaticSC font-normal  xs:text-4xl sm:text-5xl md:text-[64px] text-text-color xs:text-center md:text-start md:mt-10">
                        Олія "{title}"
                    </h2>
                    <p className="font-roboto font-light xs:text-base xs:text-center  sm:text-lg  text-text-color mt-8 md:text-left">
                        {description}
                    </p>
                    {foundProductId === _id &&
                        <p className="font-roboto font-light xs:text-base xs:text-center sm:text-lg  text-text-color md:text-left">
                            {details}
                        </p>}
                    <ProductCounter title={title} marginTop={8} position='' btnSize={8} fontSize="2xl" _id={_id} addedQuantity={addedQuantity} />
                    <div className={`${isAboveMediumScreens ? flexStart : flexCenter} xs:flex-col  sm:flex-row  gap-4 sm:gap-10  mt-8`} >
                        <Buttons title={title} text={foundProductId ? "Закрити" : "Детальніше"} size={200} padding={2} onClick={() => showDetails(_id)} />
                        <Buttons title={title} text="В корзину" size={200} padding={2} onClick={handleAddToBasket} />
                    </div>
                </div>
            </div>
        </li>
    );
};

export default SliderCard;