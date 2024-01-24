import { Card } from "@/components/Basket/Card";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

type Product = {
    id: string,
    img: string,
    title: string,
    // description?: string,
    // details?: string,
    price?: number,
    // category: ProductCategory,
};

type BasketProps = {
    products: Product[],
};

const BasketPage: React.FC<BasketProps> = ({products}) => {
    const flexBetween = 'flex items-center justify-between'
    return (
        <section className="py-[56px]">
            <div className={`${flexBetween} px-[56px]`}>
                <h1 className="font-amaticSC font-normal text-4xl text-text-color">Корзина</h1>
                <NavLink to='/'>
                    <button>
                        <XCircleIcon className="h-8 w-8 text-salat-50" />
                    </button>
                </NavLink >
            </div>
            <ul className="flex flex-col gap-2">
                {products.map((product) => <Card  
                id={product.id}
              key={product.id}
                title={product.title}
                img={product.img}
                price={product.price}
                
                />)}
            
            </ul>
          
        </section>
    )
}

export default BasketPage;