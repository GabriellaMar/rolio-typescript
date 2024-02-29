import { getBorderColor, getTextColor } from "@/services/services";
import { ProductCounter } from "../ProductCounter";
import { Buttons } from "@/components/Buttons/index";
import { createContext, useState } from "react";
import { BackgroundColor, ProductColor } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { addBasketItemThunk } from "@/redux/operations";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { selectBasketItemById } from "@/redux/basket/selectors";
import { Product } from "@/redux/product/types";
// import { selectBasketItemById } from "@/redux/basket/selectors";

export const IsHoveredContext = createContext<boolean>(false);



export const ProductCart: React.FC<Product> = ({ _id, details, title, description, img, price, }) => {
  const flexCenter = "flex items-center justify-center";
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1366px)");
  const dispatch = useAppDispatch();
  const basketItem = useSelector(selectBasketItemById(_id));
console.log(basketItem)
 

   const addedQuantity = basketItem ? basketItem.quantity  : 0;


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToBasket = () => {
    const product = { _id: _id, quantity: 1 };
    dispatch(addBasketItemThunk(product));
  };



  const productColor = ProductColor[title as keyof typeof ProductColor] || 'gray';

  const backgroundColor = BackgroundColor[title as keyof typeof ProductColor] || 'gray';

  return (
    <IsHoveredContext.Provider value={isHovered}>
    <li className="  xs:w-[280px] sm:w-[329px] text-center ">
      <div className="relative w-[174px] h-[174px] m-auto">

        <div className={`relative m-auto     `}>
          <div className={` absolute   top-0 left-0 m-auto w-[174px] h-[174px] rounded-full ${isHovered ? `${backgroundColor} hovered` : `not-hovered`}  `}>
            <div className={` absolute  top-[10px] left-[10px] m-auto w-[154px] h-[154px] rounded-full ${isHovered ? `bg-gradient-to-r ${productColor} hovered` : `not-hovered`}  `} >
              
            </div>
          </div>

          {/* <img src={`http://localhost:8000/${img}`} alt="bottle of Oil" className={`  inline-block m-auto  ${isHovered ? ' absolute -top-1 left-0  origin-center  rotate ' : 'not-rotate'}`} /> */}
          <img src={`https://rolio-backend-api.onrender.com/${img}`} alt="bottle of Oil" className={`  inline-block m-auto  ${isHovered ? ' absolute -top-1 left-0  origin-center  rotate ' : 'not-rotate'}`} />
        </div>

      </div>
      <h2 className={`font-amaticSC font-bold text-1xl ${getTextColor(title)} mt-6`}>Олія "{title}"</h2>
      <p className="font-roboto font-light text-xxs sm:text-xs text-text-color mt-4">{description}</p>
      <p className="font-roboto font-light text-xxs sm:text-xs text-text-color mt-4">{details}</p>
      <ProductCounter
        _id={_id}
        title={title}
        marginTop={6}
        position="justify-center"
        btnSize={6} fontSize="2xm"
        addedQuantity={addedQuantity}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <p className="font-light text-s text-text-color mt-4 ">250мл <span className={`inline-block font-medium text-2xl ${getTextColor(title)} ml-6`}>{`${price} грн`}</span></p>
      <div className={`${flexCenter} flex-col gap-4 mt-6 text-s md:gap-2`}>
        <Buttons title={title} text="В корзину" size={isAboveMediumScreens ? 148 : 248} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleAddToBasket} />
        {/* <Buttons title={title} text="Замовити в ТГ" size={isAboveMediumScreens ? 148 : 248} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/> */}
        <a href="https://t.me/GabriellaMar" target="_blank" rel="noopener noreferrer nofollow" className={` border ${getBorderColor(title)}   rounded-[50px]  px-12 md:px-6 ${isAboveMediumScreens ? `w-[148px]`: `w-[248px]`} xs:w-[280px]  ${getTextColor(title)} uppercase hover-gradient hover:bg-gradient-to-r ${productColor} `}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >Замовити в ТГ</a>
      </div>
    </li>
    </IsHoveredContext.Provider>
  );
};