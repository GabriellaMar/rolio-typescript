// import { ProductsList } from "./ProductsList"

// import { ProductCategory } from "@/shared/types";
import { ProductTitle } from "@/shared/types";
import { OfferCategories } from "./OfferCategories";
import { OfferSlider } from "./OfferSlider/OfferSlider";



type Product = {
    id: string,
    title: ProductTitle,
    img: string,
    description: string,
    details: string,
    price: number,
    // category: ProductCategory,
};

type OffersProps = {
    products: Product[],
    add?: () => void;
    remove?: ()=> void;
    addProduct: number,
    
};

export const Offers: React.FC <OffersProps> = ({ products, add, remove, addProduct}) => {
   
    // console.log(products)
    // const [activeProductId, setActiveProductId] = useState<string | null>(null);

    return (
        <section className="px-5 sm:px-10 pt-40 ">
         <h2 className="xs:mb-4 sm:mb-6 md:mb-8 font-amaticSC font-normal text-4xl text-salat-50 md:font-bold text-center">Наші продукти</h2> 
         <OfferCategories products={products} />
         < OfferSlider products={products} add={add} remove={remove} addProduct={addProduct}/>
            {/* <div className=" flex w-full m-auto border relative border-red-100 overflow-hidden  overflow-y-hidden">
           
            < ProductsSlider products={products} />
          
            <div className="absolute top-0 h-full w-full flex justify-between items-center text-text-color">
                <button onClick={handleNextSlide}>
                    <SlArrowLeft size={64} />
                </button>
                <button onClick={handlePreviousSlide}>
                    <SlArrowRight size={64} />
                </button>
            </div>
           </div> */}
           
        </section>
    )

}
