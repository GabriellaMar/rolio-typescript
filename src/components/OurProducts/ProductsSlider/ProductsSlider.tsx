// // import oilImage from "@/assets/image.png";
// import { ProductCategories } from "../ProductCategories";
import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
// import { ProductItem } from "../Product/Product";

type Product = {
    id: string,
    img: string,
    title: string,
    description: string,
    details: string,
    price: number,
};

type Props = {
    products: Product[],
};




export const ProductsSlider = ({ products }: Props) => {
    const [current, setCurrent] = useState<number>(0);

    const handlePreviousSlide = (): void => {
        setCurrent((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : products.length - 1
        );
        // if(current === 0) {
        // setCurrent(products.length-1)
        // } else {
        // setCurrent(current -1)
        // }
    }
    const handleNextSlide = () => {
        setCurrent((prevIndex) =>
            prevIndex < products.length - 1 ? prevIndex + 1 : 0
        );
        // if(current === products.length-1) {
        //     setCurrent(0)
        //     } else {
        //     setCurrent(current +1)
        //     }
    }
    return (
        <div className=" relative border border-red-100">
            <ul className={`flex transition ease-out duration-400 w-full`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}>
                {products.map((product) => (
                    <li key={product.id} className=" border border-orange-50  ">
                        <div className="flex gap-16">
                            <img alt="oil image" src={product.img} className="w-[393px]" />
                            <div>
                                <h2>Масло {product.title}</h2>
                                <p>{product.description}</p>
                                <p>{product.details}</p>
                                <p>Ціна 250мл `{product.price} грн`</p>
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