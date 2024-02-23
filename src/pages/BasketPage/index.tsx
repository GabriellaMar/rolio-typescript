import { Card } from "@/components/Basket/Card";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { selectBasketItem } from "@/redux/basket/selectors";
// import { BasketItem } from "@/redux/basket/types";
import { clearBasketThunk, fetchBasketItemsThunk, removeBasketItemThunk } from "@/redux/operations";
import { calculateProductItems, calculateTotalPrice } from "@/services/services";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline"
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

    const handleRemoveBasketItem = (id: string) => {

        dispatch(removeBasketItemThunk(id))
    }

    const handleClearBasket = () => {
        dispatch(clearBasketThunk());
    };

    const totalItems: number = calculateProductItems(basketItems);
    const totalPrice: number = calculateTotalPrice(basketItems)

    return (
        <section className="py-[56px]">
            <div className={`${flexBetween} px-4 sm:px-[56px]`}>
                <h1 className="font-amaticSC font-normal text-4xl text-text-color xs:text-start">Корзина</h1>
                <Link to='/'>
                    <button>
                        <XCircleIcon className="h-8 w-8  text-salat-50 clear-hover" />
                    </button>
                </Link >
            </div>
            {totalItems > 0 &&
                <>
                    <ul className="flex flex-col gap-2 mt-4">
                        {basketItems.map((item) => {
                            if (item.quantity > 0) {
                                return (
                                    <Card
                                        key={item._id}
                                        _id={item._id}
                                        quantity={item.quantity}
                                        title={item.title}
                                        img={item.img}
                                        price={item.price}
                                        onDelete={handleRemoveBasketItem}
                                    />
                                );
                            }
                        })}
                    </ul>
                    <p className="mt-20 text-right pr-8 font-roboto text-sm font-normal text-text-color">Total price:
                        <span className=" inline-block text-lg  text-salat-50 mx-2">{totalPrice}
                        </span>
                        грн
                    </p>
                    <button type="button" className="block  px-6 py-2 mt-4 ml-auto mr-8" onClick={handleClearBasket}>
                        <TrashIcon className="h-8 w-8 text-salat-50 clear-hover " />
                    </button>
                </>
            }
        </section>
    )
}

export default BasketPage;