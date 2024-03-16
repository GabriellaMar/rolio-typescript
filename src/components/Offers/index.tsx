// import { ProductsList } from "./ProductsList"

// import { ProductCategory } from "@/shared/types";
// import { ProductTitle } from "@/shared/types";
// import { OfferCategories } from "./OfferCategories";
// import { OfferSlider } from "./OfferSlider/OfferSlider";
// import { Product } from "@/redux/product/types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import productsData from '@/products.json'
import SliderCard  from "./SliderCard";
import { Product } from "@/redux/product/types";
import { SliderArrows } from "./SliderArrows";





type OffersProps = {
     products: Product[],
};



export const Offers: React.FC<OffersProps> = ({products}) => {
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
             {/* <OfferCategories 
             sliderProducts={products} 
            // products={products}

            />  */}
            <div className=' mx-auto relative  '>
                {/* <OfferCategories sliderProducts={products} /> */}
             <Carousel responsive={responsive}
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={3500}
            customTransition="transform 1500ms ease-in-out"
            transitionDuration={2000}
            arrows={false}
            showDots={true}
            // customDot={<CustomDots />}
            swipeable
            renderDotsOutside
            dotListClass="  carousel-dots  react-multi-carousel-dot "
            customButtonGroup={<SliderArrows  />}
        >

              {products.map((product) => (
              <SliderCard 
              product={product}
                // key={product._id}
                // _id={product._id}
                // title={product.title}
                // img={product.img}
                // description = {product.description}
                // details={product.details}
                sliderProducts={products}
                />
            ))}
       
        </Carousel>
        </div>
        </section>
    )

}
