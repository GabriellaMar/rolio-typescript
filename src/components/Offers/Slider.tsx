import { Product } from "@/redux/product/types";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { Buttons } from "../Buttons";
import { BackgroundColor, ProductColor } from "@/shared/types";
// import { OfferCategories } from "./OfferCategories";
// import { ProductCounter } from "../ProductCounter";
// import { selectBasketItemById } from "@/redux/basket/selectors";
// import { useSelector } from "react-redux";


// type SliderProps = {
//     products: Product[];
// };

const SliderCard: React.FC<Product> = ({ _id, title, img, description, details }) => {
    const [foundProductId, setFoundProductId] = useState<string | null>(null);
    // const basketItem = useSelector(selectBasketItemById(_id));
    // const addedQuantity = basketItem ? basketItem.quantity  : 0;


    const showDetails = (productId: string) => {
        setFoundProductId(productId === foundProductId ? null : productId);
    };


    const productColor = ProductColor[title as keyof typeof ProductColor] || 'gray';

    const backgroundColor = BackgroundColor[title as keyof typeof ProductColor] || 'gray';

    return (

        <li key={_id} className="mt-8 relative -top-10 pt-10">
            <div className="flex xs:flex-col sm:flex-row gap-16 items-center">
                 <div className={`   relative flex items-center justify-center`}> 
                    <div className={`m-auto xs:w-2sm xs:h-2sm  md:w-2lg md:h-2lg rounded-full  ${backgroundColor}`}>
                        <div className={`  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  xs:w-sm xs:h-sm md:w-lg md:h-lg rounded-full  bg-gradient-to-r ${productColor}   `} >
                            <img src={`https://rolio-backend-api.onrender.com/${img}`} alt="bottle of Oil" className={`  inline-block   slider-img  absolute top-1/2 left-1/2  `} />
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className="font-amaticSC font-normal text-4xl sm:text-5xl md:text-[64px] text-text-color mt-10">Олія "{title}"</h2>
                    <p className="font-roboto font-light text-base sm:text-lg  text-text-color mt-8">{description}</p>
                    {foundProductId === _id && <p className="font-roboto font-light text-base sm:text-lg  text-text-color ">{details}</p>}
                    {/* <ProductCounter title={product.title} marginTop={8} position='' btnSize={8} fontSize="2xl" _id={product._id} 
                                // addedQuantity={addedQuantity}
                                />  */}
                    <div className="flex flex-col  gap-4 sm:gap-10 sm:flex-row mt-8">
                        <Buttons title={title} text="Детальніше" size={200} onClick={() => showDetails(_id)} />
                        <Buttons title={title} text="В корзину" size={200} padding={2} />
                        {/* <button type="button" className={` border border-${getBorderColor(product.title)}  rounded-[50px]  px-12 py-2  min-w-full sm:min-w-[200px] text-${getBorderColor(product.title)} uppercase hover-gradient`} onClick={showDetails}>Детальніше</button>
                                    <button type="button" className={` border border-${getBorderColor(product.title)}  rounded-[50px]  px-12 py-2  min-w-full sm:min-w-[200px] text-${getBorderColor(product.title)} uppercase hover-gradient`}>В кошик</button> */}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default SliderCard;