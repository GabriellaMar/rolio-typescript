
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import SliderCard from "./SliderCard";
import { Product } from "@/redux/product/types";
import { SliderArrows } from "./SliderArrows";



type OffersProps = {
    products: Product[],
};


export const Offers: React.FC<OffersProps> = ({ products }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 5000, min: 1366 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1365, min: 768 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };



    return (
        <section className="px-5 sm:px-10  pt-40  md:px-[46px]  ">
            <h2 className="xs:mb-4 sm:mb-6 font-amaticSC font-normal text-4xl sm:text-5xl text-salat-50 md:font-bold text-center">Наші продукти</h2>
            <motion.div className='  relative  '
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.5, }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <Carousel responsive={responsive}
                    infinite={true}
                    // autoPlay={true}
                    // autoPlaySpeed={3500}
                    customTransition="transform 1500ms ease-in-out"
                    transitionDuration={2000}
                    arrows={false}
                    showDots={true}
                    swipeable
                    renderDotsOutside
                    keyBoardControl={true}
                    dotListClass="  carousel-dots  react-multi-carousel-dot "
                    customButtonGroup={<SliderArrows />}
                >

                    {products.map((product) => (
                        <SliderCard
                            product={product}
                            sliderProducts={products}
                            key={product._id}
                        />
                    ))}

                </Carousel>
            </motion.div>
        </section>
    )

}
