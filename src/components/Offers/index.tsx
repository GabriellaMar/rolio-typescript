// import { ProductsList } from "./ProductsList"

// import { ProductCategory } from "@/shared/types";
// import { ProductTitle } from "@/shared/types";
import { OfferCategories } from "./OfferCategories";
import { OfferSlider } from "./OfferSlider/OfferSlider";
import { Product } from "@/redux/product/types";


type OffersProps = {
    products: Product[],
    // add?: () => void;
    // remove?: ()=> void;
    // addProduct: number,
    
};

export const Offers: React.FC <OffersProps> = ({ products}) => {


    return (
        <section className="px-5 sm:px-10 pt-40 ">
         <h2 className="xs:mb-4 sm:mb-6 md:mb-8 font-amaticSC font-normal text-4xl text-salat-50 md:font-bold text-center">Наші продукти</h2> 
         <OfferCategories products={products} />
         < OfferSlider products={products}/>
        </section>
    )

}
