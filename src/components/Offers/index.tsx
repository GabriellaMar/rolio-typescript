// import { ProductsList } from "./ProductsList"

// import { ProductCategory } from "@/shared/types";
// import { ProductTitle } from "@/shared/types";
import { OfferCategories } from "./OfferCategories";
// import { OfferSlider } from "./OfferSlider/OfferSlider";
// import { Product } from "@/redux/product/types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import productsData from '@/products.json'
import SliderCard  from "./Slider";
import { Product } from "@/redux/product/types";


type OffersProps = {
     products: Product[],
    // add?: () => void;
    // remove?: ()=> void;
    // addProduct: number,

};

export const Offers: React.FC<OffersProps> = ({products}) => {
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

    return (
        <section className="px-5 sm:px-10 pt-40 md:px-[56px] ">
            <h2 className="xs:mb-4 sm:mb-6 md:mb-8 font-amaticSC font-normal text-4xl text-salat-50 md:font-bold text-center">Наші продукти</h2>
            {/* <OfferCategories 
            // sliderProducts={productsData} 
            products={products}

            /> */}
             <Carousel responsive={responsive}
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={3500}
            customTransition="transform 1500ms ease-in-out"
            transitionDuration={2000}
            arrows={false}
            renderButtonGroupOutside={true}
        // customButtonGroup={<Arrows />}
        >
              {products.map((product) => (<SliderCard 
                key={product._id}
                _id={product._id}
                title={product.title}
                img={product.img}
                description = {product.description}
                details={product.details}
                // price={product.price}
                />
            ))}
       
        </Carousel>
            {/* < OfferSlider products={products}/> */}
              
          
        </section>
    )

}
