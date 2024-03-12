

// type Props = {}

import { SyntheticEvent, useCallback, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Buttons } from "../Buttons"
import { NovaPost } from "./DeliveryInputs/NovaPost";
import { UkrPost } from "./DeliveryInputs/UkrPost";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addOrderThunk, clearBasketThunk } from "@/redux/operations";
import { useSelector } from "react-redux";
// import { selectOrders } from "@/redux/Order/selectors";
import { selectBasketItem } from "@/redux/basket/selectors";
import { Order } from "@/redux/Order/type";
import { BasketItem } from "@/redux/basket/types";
// import { BasketItem } from "@/redux/basket/types";


//  type InitialValuesType = {
//     userName: string,
//     phone: string,
//     deliveryMethod: string,
//     deliveryAddress: string,
//     products: BasketItem[],
//  }
const basketFormSchema = Yup.object({
    userName: Yup.string().required("Ім'я обов'язкове поле").trim(),
    phone: Yup.string().matches(/^\+\d{12}$/, "Телефон повинен мати формат +12345678901").required("Телефон обов'язкове поле").trim(),
    // deliveryAddress: Yup.string().required("Адреса доставки обов'язкова").trim(),
    deliveryMethod: Yup.string().oneOf(['нова пошта', 'укр пошта']).required("Спосіб доставки обов'язковий")
});

export const BasketForm = () => {

    const [deliveryMethod, setDeliveryMethod] = useState<string>('');
    const [deliveryAddress, setDeliveryAddress] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const dispatch = useAppDispatch();
    const { basketItems } = useSelector(selectBasketItem);

    // const initialValues: Order = {
    //     userName: '',
    //     phone: '',
    //     deliveryMethod:'нова пошта',
    //     deliveryAddress: '',
    //     products: basketItems,
    // };


    // const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setDeliveryMethod(event.target.value);
    // }


    // const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     switch (e.target.name) {
    //         case 'userName':
    //             setUserName(e.target.value);
    //             break;
    //         case 'phone':
    //             setPhone(e.target.value);
    //             break;
    //         default:
    //             return
    //     }
    // }


    // const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    //     e.preventDefault();
    //     const order: Order = {
    //         userName,
    //         phone,
    //         deliveryMethod,
    //         deliveryAddress,
    //         products: basketItems,
    //     };

    //     dispatch(addOrderThunk(order));
    //     dispatch(clearBasketThunk());
    //     setUserName('');
    //     setPhone('');
    //     setDeliveryMethod('');
    //     setDeliveryAddress('');
    // }


    // const handleResetBasket=()=>{
    //     dispatch(clearBasketThunk());
    //     // console.log("RESET BASKET")
    // }
    const handleResetBasket = useCallback(() => {
        if (window.confirm('Ви дійсно, що хочете очистити вашу корзину?')) {
            dispatch(clearBasketThunk());
            // setUserName('');
            // setPhone('');
            // setDeliveryMethod('');
            // setDeliveryAddress('');
        }
    }, [dispatch]);

    return (

        <Formik<Order>
    initialValues={{
        userName: '',
        phone: '',
        deliveryMethod: 'нова пошта',
        deliveryAddress: '',
        products: basketItems,  
    }}
   
     validationSchema={basketFormSchema}
    onSubmit={(values, {resetForm}  ) => {
        console.log("Submit", values)
       alert(JSON.stringify(values))
    
    //    const order: Order = {
    //        userName: values.userName,
    //        phone: values.phone,
    //        deliveryMethod: values.deliveryMethod,
    //        deliveryAddress: values.deliveryAddress,
    //        products: basketItems,
    //    };

       dispatch(addOrderThunk(values));
       resetForm()
        // dispatch(clearBasketThunk());
    //    setUserName('');
    //    setPhone('');
    //    setDeliveryMethod('');
    //    setDeliveryAddress('');
   
      
    }}
>
    {({handleSubmit, values, handleChange})=>(
        <Form className=" px-4 sm:px-[46px]"
          onSubmit={handleSubmit}
    >

        <label className="flex flex-col font-roboto  text-base text-text-color font-normal  ">
            <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block font-roboto  text-base text-text-color font-normal">
                Ім'я та прізвище користувача
            </span>

            <Field className="border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
                type='text'
                name="userName"
                placeholder="Введіть ваше ім'я"
                autoComplete="off"
                value={values.userName}
                onChange={handleChange}
            />
             <ErrorMessage name="userName" component="div" className="text-red-500" />
           
        </label>
        <label className="flex flex-col mt-6 font-roboto  text-base text-text-color font-normal">
            <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block font-roboto  text-base text-text-color font-normal">
                Номер телефону
            </span>
            <Field  className="border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
                type='phone'
                name="phone"
                placeholder="Ваш номер телефону"
                autoComplete="off"
                value={values.phone}
                onChange={handleChange}
            />
             <ErrorMessage name="phone" component="div" className="text-red-500" />
        </label>
        <h2 className="mt-6 font-amaticSC font-normal text-xl text-text-color">Способи доставки</h2>
        <div className="flex gap-14 items-center mt-6">
            <label htmlFor='нова пошта' className="font-roboto  text-base text-text-color font-normal" > Нова пошта
                <Field className="ml-6 indeterminate:bg-gray-300 "
                    id='нова пошта'
                    type='radio'
                    name="deliveryMethod"
                    value="нова пошта"
                    onChange={ handleChange}
                      checked={values.deliveryMethod === 'нова пошта'}
                />
            </label>

            <label htmlFor='укр пошта' className="font-roboto  text-base text-text-color font-normal"> Укр пошта
                <Field className="ml-6 checked:bg-red-500"
                    id='укр пошта'
                    type='radio'
                    name="deliveryMethod"
                    value="укр пошта"
                    onChange={ handleChange}
                    //  checked={values.deliveryMethod === 'укр пошта'}
                />
            </label>
            
        </div>
        {values.deliveryMethod === 'нова пошта' ? (
           <div className=" flex flex-col w-[360px] gap-4 mt-6">
           <Field className="border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
               type='text'
               name="deliveryAddress"
               placeholder="Місто"
               autoComplete="off"
               value={values.deliveryAddress}  
               onChange={handleChange}
              
           />
           <Field className="border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 placeholder:roboto placeholder:text-light-grey-10"
               type='text'
             name="deliveryAddress"
               placeholder="Номер відділення"
               autoComplete="off"
               value={values.deliveryAddress}
               onChange={handleChange}
           />
       </div>
            // <NovaPost
            //      setDeliveryAddress={setDeliveryAddress}
            // />
        ): (
       
        <UkrPost 
            setDeliveryAddress={setDeliveryAddress}
            />
        )}
        {/* {values.deliveryMethod === 'укр пошта' && (
            <div>UKR</div>
            // <UkrPost 
            // setDeliveryAddress={setDeliveryAddress}
            // />
            
        )} */}
        {/* <button > Зробити замовлення</button> */}
        <div className="flex flex-col gap-6 xs:items-center sm:items-end mt-6">
            <Buttons title={"Для салату"} text="Замовити" size={200} padding={2} type={"submit"} />
            <Buttons title={"Для салату"} text="Скинути" size={200} padding={2} type={"button"} onClick={handleResetBasket}/>
        </div>
    </Form>
    )}
        
        </Formik>
    )
}