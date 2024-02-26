import { Product } from "@/redux/product/types";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Buttons } from "../Buttons";
// import { OfferCategories } from "./OfferCategories";
// import { ProductCounter } from "../ProductCounter";
// import { selectBasketItemById } from "@/redux/basket/selectors";
// import { useSelector } from "react-redux";


type SliderProps = {
    sliderProducts: Product[];
};

const SliderComponent: React.FC<SliderProps> = ({ sliderProducts }) => {
    const [findedProductId, setFindedProductId] = useState<string | null>(null);
    // const basketItem = useSelector(selectBasketItemById(_id));
    // const addedQuantity = basketItem ? basketItem.quantity  : 0;

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const showDetails = (productId: string) => {
        setFindedProductId(productId === findedProductId ? null : productId);
    };

    return (
        <Carousel responsive={responsive}
            infinite={true}
            autoPlay={true}
            // autoPlaySpeed={3500}
            customTransition="transform 1500ms ease-in-out"
            transitionDuration={2000}
            arrows={false}
            renderButtonGroupOutside={true}
            // customButtonGroup={<Arrows />}
        >
            {sliderProducts.map((product) => (
                 <li key={product._id} className="mt-10 relative -top-10">
                        <div className="flex gap-16 items-center">
                            <img alt="oil image" src={product.img} className="w-[393px]" />
                            <div className="m-w-[613px]">
                                <h2 className="font-amaticSC font-normal text-4xl sm:text-5xl md:text-[64px] text-text-color mt-10">Олія "{product.title}"</h2>
                                <p className="font-roboto font-light text-base sm:text-lg  text-text-color mt-8">{product.description}</p>
                                {findedProductId === product._id && <p className="font-roboto font-light text-base sm:text-lg  text-text-color ">{product.details}</p> }
                                {/* <ProductCounter title={product.title} marginTop={8} position='' btnSize={8} fontSize="2xl" _id={product._id} 
                                // addedQuantity={addedQuantity}
                                />  */}
                                <div className="flex flex-col  gap-4 sm:gap-10 sm:flex-row mt-8">
                                 <Buttons title = {product.title} text="Детальніше" size={200} onClick={() => showDetails(product._id)} />
                                <Buttons  title = {product.title} text="В корзину" size={200}  padding={2}/>
                                    {/* <button type="button" className={` border border-${getBorderColor(product.title)}  rounded-[50px]  px-12 py-2  min-w-full sm:min-w-[200px] text-${getBorderColor(product.title)} uppercase hover-gradient`} onClick={showDetails}>Детальніше</button>
                                    <button type="button" className={` border border-${getBorderColor(product.title)}  rounded-[50px]  px-12 py-2  min-w-full sm:min-w-[200px] text-${getBorderColor(product.title)} uppercase hover-gradient`}>В кошик</button> */}
                                </div>
                            </div>
                        </div>
                    </li>
            ))}
        </Carousel>
    );
};

export default SliderComponent;