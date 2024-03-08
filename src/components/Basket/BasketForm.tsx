

// type Props = {}

import { SyntheticEvent, useState } from "react";
import { Buttons } from "../Buttons"
import { NovaPost } from "./DeliveryInputs/NovaPost";
import { UkrPost } from "./DeliveryInputs/UkrPost";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addOrderThunk } from "@/redux/operations";
import { useSelector } from "react-redux";
// import { selectOrders } from "@/redux/Order/selectors";
import { selectBasketItem } from "@/redux/basket/selectors";
// import { BasketItem } from "@/redux/basket/types";


export const BasketForm = () => {

    const [deliveryMethod, setDeliveryMethod] = useState<string>('нова пошта');
    const [deliveryAddress, setDeliveryAddress] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const dispatch = useAppDispatch();
    const { basketItems } = useSelector(selectBasketItem);



    const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeliveryMethod(event.target.value);
    }


    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'userName':
                setUserName(e.target.value);
                break;
            case 'phone':
                setPhone(e.target.value);
                break;
            default:
                return
        }
    }



    const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        const order = {
            userName,
            phone,
            deliveryMethod,
            deliveryAddress,
            products: basketItems,

        };

        dispatch(addOrderThunk(order));
    }

    return (
        <form className="  px-4 sm:px-[46px]"
            onSubmit={handleSubmit}
        >

            <label className="flex flex-col font-roboto  text-base text-text-color font-normal  ">
                <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block font-roboto  text-base text-text-color font-normal">
                    Ім'я користувача
                </span>

                <input className="border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
                    type='text'
                    name="userName"
                    placeholder="Введіть ваше ім'я"
                    autoComplete="off"
                    value={userName}
                    onChange={handleUserChange}
                />
            </label>
            <label className="flex flex-col mt-6 font-roboto  text-base text-text-color font-normal">
                <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block font-roboto  text-base text-text-color font-normal">
                    Номер телефону
                </span>
                <input className="border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
                    type='phone'
                    name="phone"
                    placeholder="Ваш номер телефону"
                    autoComplete="off"
                    value={phone}
                    onChange={handleUserChange}
                />
            </label>
            <h2 className="mt-6 font-amaticSC font-normal text-xl text-text-color">Способи доставки</h2>
            <div className="flex gap-14 items-center mt-6">
                <label htmlFor='нова пошта' className="font-roboto  text-base text-text-color font-normal" > Нова пошта
                    <input className="ml-6 indeterminate:bg-gray-300 "
                        id='нова пошта'
                        type='radio'
                        name="delivery"
                        value='нова пошта'
                        checked={deliveryMethod === 'нова пошта'}
                        onChange={handleDeliveryChange}
                    />
                </label>

                <label htmlFor='укр пошта' className="font-roboto  text-base text-text-color font-normal"> Укр пошта
                    <input className="ml-6 checked:bg-red-500"
                        id='укр пошта'
                        type='radio'
                        name="delivery"
                        value='укр пошта'
                        onChange={handleDeliveryChange}
                    />
                </label>
            </div>
            {deliveryMethod === 'нова пошта' && (
                <NovaPost
                    setDeliveryAddress={setDeliveryAddress}
                />
            )}
            {deliveryMethod === 'укр пошта' && (
                <UkrPost />
                
            )}
            {/* <button > Зробити замовлення</button> */}
            <div className="flex flex-col gap-6 xs:items-center sm:items-end mt-6">
                <Buttons title={"Для салату"} text="Замовити" size={200} padding={2} type={"submit"} />
                <Buttons title={"Для салату"} text="Скинути" size={200} padding={2} type={"button"} />
            </div>
        </form>
    )
}