import { Card } from "@/components/Basket/Card";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { selectBasketItem } from "@/redux/basket/selectors";
// import { BasketItem } from "@/redux/basket/types";
import { clearBasketThunk, fetchBasketItemsThunk, removeBasketItemThunk } from "@/redux/operations";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const BasketPage: React.FC = () => {
    const flexBetween = 'flex items-center justify-between'
    const { basketItems } = useSelector(selectBasketItem);
    // console.log("basketItems ITEMS:", basketItems)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBasketItemsThunk());
    }, [dispatch]);

    const handleRemoveBasketItem = (productId: string) => {
        dispatch(removeBasketItemThunk(productId))
    }

    const handleClearBasket = () => {
        dispatch(clearBasketThunk());
    };

    // console.log("ITEMS:", basketItems)

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
                {basketItems.map((item) => {

                    return (
                        <Card
                            key={item.productId}
                            productId={item.productId}
                            quantity={item.quantity}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            onDelete={handleRemoveBasketItem}
                        />
                    );
                })}
            </ul>
            <p className="mt-20">Total price:</p>
            {basketItems.length > 0 && <button type="button" className="bg-salat-10 px-6 py-2" onClick={handleClearBasket}> Очистити корзину </button>}
        </section>
    )
}

export default BasketPage;