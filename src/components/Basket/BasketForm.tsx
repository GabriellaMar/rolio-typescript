
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Buttons } from "../Buttons"
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addOrderThunk, clearBasketThunk } from "@/redux/operations";
import { useSelector } from "react-redux";
import { selectBasketItem } from "@/redux/basket/selectors";
import { Order } from "@/redux/order/type";
import { SuccessOrderModal } from '../SuccessOrderModal';
import { useContext } from 'react';
import { ModalContext } from '../ModalContext';
import { selectOrderStatus } from '@/redux/order/selectors';
import { Status } from '@/redux/product/types';



export const BasketForm = () => {
    const { basketItems } = useSelector(selectBasketItem);
    const { showModal, toggleModal } = useContext(ModalContext);
    const orderStatus = useSelector(selectOrderStatus);
    
    const dispatch = useAppDispatch();
    const initialValues = {
        userName: '',
        phone: '',
        deliveryMethod: 'нова пошта',
        deliveryAddress: {
            city: '',
            warehouse: '',
            index: '',
            street: '',
            house: '',
            apartment: '',
        },
        products: basketItems
    };


    const validationSchema = Yup.object().shape({
        userName: Yup.string().min(2, 'Занадто коротке').matches(/^[A-Za-zА-Яа-яЁёІіЇїЄє\s']+$/, 'Ім\'я повинне містити тільки букви').required("Будь ласка, введіть своє ім'я"),
        phone: Yup.string()
            .matches(/^\+\d{12}$/, "Телефон повинен мати формат +12345678901")
            .required("Телефон є обов'язковим")
            .trim(),
        deliveryMethod: Yup.string().required('Будь ласка, оберіть метод доставки').trim(),
        deliveryAddress: Yup.object().shape({
            city: Yup.string().required("Назва міста обов'язкова "),
            warehouse: Yup.number().typeError("Має бути число").notRequired(),
            index: Yup.number().typeError("Має бути число").notRequired(),
            street: Yup.string().notRequired(),
            house: Yup.number().typeError("Має бути число").notRequired(),
            apartment: Yup.string().notRequired(),
        })
    });



    const handleSubmit = async (values: Order) => {
        await dispatch(addOrderThunk(values));

        if (values) {
            toggleModal();
        }
    };

    const handleCloseModal = () => {
        toggleModal();
        if (orderStatus === Status.SUCCESS) {
            dispatch(clearBasketThunk());
        }
    };

    return (
        <div className='mt-8'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnChange={true}
                validateOnBlur={true}
            >
                {({ values, handleReset }) => (

                    <Form className=" px-4 sm:px-[46px] pb-10">
                        <ul>
                            <li> <label className="flex flex-col font-roboto  text-base text-text-color font-normal  ">
                                <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block font-roboto  text-base text-text-color font-normal">
                                    Ім'я та прізвище користувача
                                </span></label>
                                <Field className="border rounded border-light-grey-10 px-4 py-2 xs:w-full max-w-[427px] md:w-[457] mt-1 outline-0  focus:border-salat-50   focus:ring-transparent focused:scale-1 placeholder:roboto placeholder:text-light-grey-10"
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    placeholder=" Ваше ім'я та прізвище"
                                />
                                <ErrorMessage name="userName" component="div" className="text-red-500" />
                            </li>

                            <li> <label className="flex flex-col mt-6 font-roboto  text-base text-text-color font-normal">
                                <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block font-roboto  text-base text-text-color font-normal">
                                    Контактний номер телефону
                                </span></label>
                                <Field className="border rounded border-light-grey-10 px-4 py-2 xs:w-full max-w-[427px] md:w-[457px] mt-1 outline-0  focus:border-salat-50   focus:ring-transparent placeholder:roboto placeholder:text-light-grey-10"
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="+380"

                                />
                                <ErrorMessage name="phone" component="div" className="text-red-500" />
                            </li>
                        </ul>

                        <h2 className="mt-6 font-amaticSC font-normal text-xl text-text-color">Спосіб доставки</h2>
                        <ul className="flex gap-14 items-center mt-6">
                            <li>
                                <label className="font-roboto  text-base text-text-color font-normal" >
                                    <Field className="ml-6  mr-3 rounded-full  text-salat-10 focus:ring-salat-10"
                                        type="radio"
                                        name="deliveryMethod"
                                        value="нова пошта"
                                    />

                                    Нова пошта
                                </label>
                            </li>
                            <li>
                                <label className="font-roboto  text-base text-text-color font-normal" >
                                    <Field className="ml-6 mr-3 rounded-full  text-salat-10  focus:ring-salat-10"
                                        type="radio"
                                        name="deliveryMethod"
                                        value="укр пошта"
                                    />
                                    Укр пошта
                                </label>
                            </li>

                        </ul>
                        <ErrorMessage name="deliveryMethod" component="div" className="text-red-500" />
                        {values.deliveryMethod === 'нова пошта' && (
                            <div className=" flex flex-col xs:w-full max-w-[427px] md:w-[457]  gap-4 mt-6">
                                <Field className="border rounded border-light-grey-10   px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0   focus:border-salat-50   focus:ring-transparent placeholder:roboto placeholder:text-light-grey-10"
                                    type="text"
                                    id="deliveryAddress.city"
                                    name="deliveryAddress.city"
                                    placeholder="Місто"
                                />
                                <ErrorMessage name="deliveryAddress.city" component="div" className="text-red-500" />
                                <Field className="border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:max-w-[427px] md:w-[457] mt-1 outline-0 focus:border-salat-50 focus:ring-transparent placeholder:roboto placeholder:text-light-grey-10"
                                    type="text"
                                    id="deliveryAddress.warehouse"
                                    name="deliveryAddress.warehouse"
                                    placeholder="Склад"
                                />
                                <ErrorMessage name="deliveryAddress.warehouse" component="div" className="text-red-500" />
                            </div>
                        )}
                        {values.deliveryMethod === 'укр пошта' && (
                            <ul className=" flex xs:flex-col sm:flex-row flex-wrap xs:w-full  max-w-[427px] md:max-w-[457px]  gap-4  mt-6">
                                <li>
                                    <Field className=" border rounded border-light-grey-10 px-4 py-2 xs:w-full  sm:w-[153px]  md:w-[160px] mt-1 outline-0rounded-full  text-salat-50  focus:border-salat-50 focus:ring-transparent placeholder:roboto placeholder:text-light-grey-10"
                                        type="text"
                                        id="deliveryAddress.index"
                                        name="deliveryAddress.index"
                                        placeholder="Індекс"
                                    />
                                    <ErrorMessage name="deliveryAddress.index" component="div" className="text-red-500" />
                                </li>
                                <li>
                                    <Field className="  border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:w-[255px] md:w-[257px]  mt-1 outline-0 focus:border-salat-50 focus:ring-transparent placeholder:roboto placeholder:text-light-grey-10"
                                        type="text"
                                        id="deliveryAddress.city"
                                        name="deliveryAddress.city"
                                        placeholder="Місто"
                                    />
                                    <ErrorMessage name="deliveryAddress.city" component="div" className="text-red-500" />
                                </li>
                                <li>
                                    <Field className="  border rounded border-light-grey-10 px-4 py-2 xs:w-full sm:w-[255px] md:w-[263px] mt-1 outline-0 focus:border-salat-50 focus:ring-transparent placeholder:roboto placeholder:text-light-grey-10"
                                        type="text"
                                        id="deliveryAddress.street"
                                        name="deliveryAddress.street"
                                        placeholder="Вулиця"
                                    />
                                    <ErrorMessage name="deliveryAddress.street" component="div" className="text-red-500" />
                                </li>
                                <li>
                                    <Field className=" border rounded border-light-grey-10 px-4 py-2  xs:w-full   sm:max-w-[153px]  md:w-[160px] mt-1 outline-0 focus:border-salat-50  focus:ring-transparent  placeholder:roboto placeholder:text-light-grey-10"
                                        type="text"
                                        id="deliveryAddress.house"
                                        name="deliveryAddress.house"
                                        placeholder="Будинок"
                                    />
                                    <ErrorMessage name="deliveryAddress.house" component="div" className="text-red-500" />
                                </li>
                                <Field className="border rounded border-light-grey-10 px-4 py-2 xs:w-full max-w-[430px] md:w-[430px] mt-1 outline-0 focus:border-salat-50 focus:ring-transparent placeholder:roboto placeholder:text-light-grey-10"
                                    type="text"
                                    id="deliveryAddress.apartment"
                                    name="deliveryAddress.apartment"
                                    placeholder="Додатково (під'їзд, квартира)"
                                />
                            </ul>
                        )}
                        <div className="flex flex-col gap-6 xs:items-center sm:items-end mt-6">
                            <Buttons title={"Для салату"} text="Замовити" size={200} padding={2} type={"submit"} />
                            <Buttons title={"Для салату"} text="Скинути" size={200} padding={2} type={"button"} onClick={handleReset} />
                        </div>
                        {showModal && <SuccessOrderModal closeModal={handleCloseModal} values={values.userName} />}
                    </Form>
                )}
            </Formik>
        </div>
    );
};
