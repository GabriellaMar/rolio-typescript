import { Card } from "@/components/Basket/Card";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { selectBasketItem } from "@/redux/basket/selectors";
import { fetchBasketItemsThunk, removeBasketItemThunk } from "@/redux/operations";
import { calculateProductItems, calculateTotalPrice } from "@/services/services";
// import { TrashIcon } from "@heroicons/react/24/outline"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import emptyBasket from "@/assets/empty-cart.png"
import closeIcon from "@/assets/modal-close.png"
import { BasketForm } from "@/components/Basket/BasketForm";
import { ModalProvider } from "@/components/ModalContext";



const BasketPage: React.FC = () => {
    const flexBetween = 'flex items-center justify-between'
    const { basketItems } = useSelector(selectBasketItem);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBasketItemsThunk());
    }, [dispatch]);

    const handleRemoveBasketItem = (id: string) => {
        dispatch(removeBasketItemThunk(id))
    }

    // const handleClearBasket = () => {
    //     dispatch(clearBasketThunk());
    // };

    const totalItems: number = calculateProductItems(basketItems);
    const totalPrice: number = calculateTotalPrice(basketItems)

    return (
        <section className={`py-[40px] h-screen ${basketItems.length > 0 ? `bg-white` : `bg-light-grey-50 `} `}>
            <div className={`${flexBetween} px-4 sm:px-[46px]`}>
                <h1 className="font-amaticSC font-normal text-4xl text-text-color xs:text-start">Корзина</h1>
                <Link to='/'>
                    <button>
                        <img src={closeIcon} className="h-8 w-8  text-salat-50 clear-hover" />
                    </button>
                </Link >
            </div>
            {basketItems && totalItems > 0 ? (
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
                    <p className="mt-6 text-right pr-8 font-roboto text-sm font-normal text-text-color">Загальна вартість:
                        <span className=" inline-block text-lg  text-salat-50 mx-2">{totalPrice}
                        </span>
                        грн
                    </p>
                    <ModalProvider>
                        <BasketForm />
                    </ModalProvider>

                </>
            ) : (
                <>
                    <div className="m-auto ">
                        <p className="text-center font-amaticSC font-bold text-4xl text-salat-50 mt-12">Наразі ваша корзина порожня.</p>
                        <p className="font-amaticSC text-xl font-normal text-text-color text-center mt-2">Почніть додавати товари, щоб насолоджуватися покупками!</p>
                    </div>
                    <img src={emptyBasket} className="m-auto w-1/2" />
                </>
            )
            }
        </section>
    )
}

export default BasketPage;