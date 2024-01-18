import { getTextColor } from "@/services/services";
import { ProductCounter } from "../ProductCounter/ProductCounter";
import { Buttons } from "@/components/Buttons/index";
import { useState } from "react";
import { ProductColor } from "@/shared/types";
//  import { ProductTitle } from "@/shared/types";


type Props = {
  id: string,
  title: string,
  img: string,
  description: string,
  details?: string,
  price?: number,
  // category: ProductCategory,
};



export const Product = ({ id, details, title, description, img, price }: Props) => {
  // const lowerCaseTitle = title.toLocaleLowerCase().replace(/ /g, "") as ProductTitle
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const productColor = ProductColor[title as keyof typeof ProductColor] || 'gray';
  // const backgroundColor = gradientColor[title as ProductTitle] || 'gray';

  return (
    <li key={id} className=" m-auto xs:w-[280px] sm:w-[329px]  md:w-[250px] text-center border">
      <div className="relative w-[174px] h-[174px] m-auto">
        {isHovered ? (

          <div className={`relative m-auto w-[173px] h-[173px] rounded-full bg-salat   transition duration-300 `}>
            <div className={` absolute top-2 left-2 m-auto w-[154px] h-[154px] rounded-full bg-gradient-to-r ${productColor}`} >
              <img src={img} alt="bottle of Oil" className={`  inline-block m-auto  ${isHovered ? ' absolute top-0 left-0 transition-transform  origin-center duration-300  rotate-12 scale-125' : ''}`} />
            </div>
          </div>

        ) :
          (<img src={img} alt="bottle of Oil" className={` inline-block m-auto  ${isHovered ? 'w-[287px] absolute top-0 left-4 transition-transform  origin-center rotate-12 ' : ''}`} 
          />)}
      </div>
      <h2 className={`font-amaticSC font-bold text-1xl ${getTextColor(title)} mt-6`}>Масло "{title}"</h2>
      <p className="font-roboto font-light text-xxs sm:text-xs text-text-color mt-4">{description}</p>
      <p className="font-roboto font-light text-xxs sm:text-xs text-text-color mt-4">{details}</p>
      <ProductCounter
        title={title}
        marginTop={6}
        position="justify-center"
        btnSize={6} fontSize="2xm"
      />
      <p className="font-light text-s text-text-color mt-4 ">250мл <span className={`inline-block font-medium text-2xl ${getTextColor(title)} ml-6`}>{`${price} грн`}</span></p>
      <div className="flex flex-col gap-4 mt-6 text-s">
        <Buttons title={title} text="В корзину" size={248} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <Buttons title={title} text="Замовити в ТГ" size={248} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      </div>
    </li>
  );
};