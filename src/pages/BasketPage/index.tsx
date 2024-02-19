import { Card } from "@/components/Basket/Card";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { selectBasketItem } from "@/redux/basket/selectors";
import { BasketItem } from "@/redux/basket/types";
import { fetchBasketItemsThunk} from "@/redux/operations";
import { Product } from "@/redux/product/types";
// import { selectProductData } from "@/redux/product/selectors";
// import { Product } from "@/redux/product/types";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


// type BasketProps = {
//     productId: BasketItem,
//     title: Product[];
//     img: Product[];
//     price: Product[];
//     quantity: BasketItem

// };




const BasketPage: React.FC= () => {
    const flexBetween = 'flex items-center justify-between'
    const {basketItems} = useSelector(selectBasketItem);
    console.log("basketItems ITEMS:", basketItems)
    // const {items}  = useSelector( selectProductData);
    // console.log("SElect ITEMS:", items)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchBasketItemsThunk());
    }, [dispatch]);
    
    // const handleRemoveBasketItem =(productId)=>{
    //     dispatch(removeBasketItemThunk(productId))
    // }
    
    console.log("ITEMS:", basketItems)
  

    return (
        <section className="py-[56px]">
            <div className={`${flexBetween} px-[56px]`}>
                <h1 className="font-amaticSC font-normal text-4xl text-text-color">Корзина</h1>
                <Link to='/'>
                    <button>
                        <XCircleIcon className="h-8 w-8 text-salat-50" />
                    </button>
                </Link >
            </div>
            <ul className="flex flex-col gap-2">
                {/* {items.map((product) => <Card
                    key={product.productId} // Ключ повинен бути productId, а не _id
                    id={product.productId} // Передавайте productId, а не _id
                    title={product.product.title} // Використовуйте product.title, оскільки product тепер містить повну інформацію про товар
                    img={product.product.img}
                    price={product.product.price}
                    quantity={product.quantity}

                />)} */}
                 {basketItems.map((item) => {
                  
                    return (
                        <Card
                        key={item.productId}
                         productId={item.productId}
                        quantity={item.quantity}
                        title={item.product.title}
                        img={item.product.img}
                        price={item.product.price}
                        />
                    );
                })}

            </ul>

        </section>
    )
}

export default BasketPage;