// // import oilImage from "@/assets/image.png";
// import { ProductCategories } from "../ProductCategories";
import { ProductCounter } from "@/components/ProductCounter/ProductCounter";
import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
// import { getBorderColor } from "@/services/services"
import { Buttons } from "@/components/Buttons";
// import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";

// import { ProductCategory } from "@/shared/types";
// import { ProductItem } from "../Product/Product";

type Product = {
    id: string,
    img: string,
    title: string,
    description: string,
    details: string,
    price?: number,
    // category: ProductCategory,
};

type Props = {
    products: Product[],
};




export const OfferSlider = ({ products }: Props) => {
     const [current, setCurrent] = useState<number>(0);

    const [delails, setDetails] = useState<boolean>(false);

    const handlePreviousSlide = (): void => {
        // setCurrent((prevIndex) =>
        //     prevIndex > 0 ? prevIndex - 1 : products.length - 1
        // );
        if(current === 0) {
        setCurrent(products.length-1)
        } else {
        setCurrent(current -1)
        }
    }
    const handleNextSlide = () => {
        // setCurrent((prevIndex) =>
        //     prevIndex < products.length - 1 ? prevIndex + 1 : 0
        // );
        if(current === products.length-1) {
            setCurrent(0)
            } else {
            setCurrent(current +1)
            }
    }

    // export const getBorderColor = (title: string): string => {
    //     switch (title) {
    //         case "Для салата":
    //             return 'salat-50';
    //         case "Італійське":
    //             return 'italian-50';
    //         case "Для м'яса":
    //             return 'meet-50';
    //         case "Східне":
    //             return 'orange-50';
    //         default:
    //             return 'border-red-100';
    //     }
    // }

    const showDetails = () =>{
        setDetails(true)
    }


    return (
        <div className=" flex w-full m-auto border relative border-red-100 overflow-hidden  overflow-y-hidden">
        {/* // <div
        // // className="overflow-hidden relative border border-red-100"
        // > */}
            <ul
                className=" flex"
            // className={`flex transition ease-out duration-400 w-full`}
            //     style={{
            //         transform: `translateX(-${current * 100}%)`,
            //     }}
            >
                {products.map((product) => (
                    <li key={product.id} className=" border border-orange-50 xs:px-5 w-[100vw]">
                        <div className="flex gap-16">
                            <img alt="oil image" src={product.img} className="w-[393px]" />
                            <div>
                                <h2 className="font-amaticSC font-normal text-4xl sm:text-5xl md:text-[64px] text-text-color ">Масло "{product.title}"</h2>
                                <p className="font-roboto font-light text-base sm:text-lg  text-text-color ">{product.description}</p>
                                {delails &&  <p className="font-roboto font-light text-base sm:text-lg  text-text-color ">{product.details}</p>}
                                <ProductCounter title={product.title} marginTop={8} position=''/>
                                <div className="flex flex-col  gap-4 sm:gap-10 sm:flex-row mt-8">
                                <Buttons title={product.title} text="Детальніше" size={200}  onClick={showDetails}/>
                                <Buttons title={product.title} text="В корзину" size={200}  padding={2}/>
                                    {/* <button type="button" className={` border border-${getBorderColor(product.title)}  rounded-[50px]  px-12 py-2  min-w-full sm:min-w-[200px] text-${getBorderColor(product.title)} uppercase hover-gradient`} onClick={showDetails}>Детальніше</button>
                                    <button type="button" className={` border border-${getBorderColor(product.title)}  rounded-[50px]  px-12 py-2  min-w-full sm:min-w-[200px] text-${getBorderColor(product.title)} uppercase hover-gradient`}>В кошик</button> */}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
             
            <div className="absolute top-0 h-full w-full flex justify-between items-center text-text-color">
                <button onClick={handleNextSlide}>
                    <SlArrowLeft size={64} />
                </button>
                <button onClick={handlePreviousSlide}>
                    <SlArrowRight size={64} />
                </button>
            </div>
          
     </div>
    )
}