import { getTextColor } from "@/services/services";
import { ProductCounter } from "../ProductCounter";
import { Buttons } from "@/components/Buttons/index";
import { useState } from "react";
import { BackgroundColor, ProductColor, ProductTitle } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";



type ProductProps = {
  id: string,
  title: ProductTitle,
  img: string,
  description: string,
  details?: string,
  price: number,
  add?: () => void;
    remove?: ()=> void;
    addProduct: number,

};

  


export const Product: React.FC <ProductProps> = ({ id, details, title, description, img, price, add, remove, addProduct}) => {
  // const lowerCaseTitle = title.toLocaleLowerCase().replace(/ /g, "") as ProductTitle
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1366px)");
  

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // const add = ()=>{
  //   setAddProduct((prevState)=>prevState + 1)
  // }

  // const remove =() => {setAddProduct((prevState) => prevState- 1)}

  // const productColor = ProductColor[title as keyof typeof ProductColor] || 'gray';
  const productColor = ProductColor[title] || '';
   const backgroundColor = BackgroundColor[title] || 'gray';

  return (
    <li key={id} className="  xs:w-[280px] sm:w-[329px]  md:min-w-[360px]  text-center m-auto">
      <div className="relative w-[174px] h-[174px] m-auto">

          <div className={`relative m-auto     `}>
            <div className={ ` absolute   top-0 left-0 m-auto w-[174px] h-[174px] rounded-full ${isHovered ? `${backgroundColor} hovered`:  `not-hovered`}  `}>
            <div className={ ` absolute  top-[10px] left-[10px] m-auto w-[154px] h-[154px] rounded-full ${isHovered ? `bg-gradient-to-r ${productColor} hovered`:  `not-hovered`}  `} ></div>
            </div>
           
            <img src={img} alt="bottle of Oil" className={`  inline-block m-auto  ${isHovered ? ' absolute -top-1 left-0  origin-center  rotate ' : 'not-rotate'}`} />
          </div>

      </div>
      <h2 className={`font-amaticSC font-bold text-1xl ${getTextColor(title)} mt-6`}>Масло "{title}"</h2>
      <p className="font-roboto font-light text-xxs sm:text-xs text-text-color mt-4">{description}</p>
      <p className="font-roboto font-light text-xxs sm:text-xs text-text-color mt-4">{details}</p>
      <ProductCounter
       
        title={title}
        marginTop={6}
        position="justify-center"
        btnSize={6} fontSize="2xm"
        add={add}
        remove={remove}
        addProduct={addProduct}
      />
      <p className="font-light text-s text-text-color mt-4 ">250мл <span className={`inline-block font-medium text-2xl ${getTextColor(title)} ml-6`}>{`${price} грн`}</span></p>
      <div className="flex flex-col gap-4 mt-6 text-s md:flex-row md:gap-2">
        <Buttons  title = {title} text="В корзину" size={isAboveMediumScreens? 148: 248} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={add}/>
        <Buttons title = {title} text="Замовити в ТГ" size={isAboveMediumScreens? 148: 248} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  onClick={remove}/>
      </div>
    </li>
  );
};