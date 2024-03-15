import { selectOrderStatus } from "@/redux/order/selectors";
import { Status } from "@/redux/product/types";
import { useSelector } from "react-redux";


type SuccessMessageProps = {
    values: string;
};

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ values }) => {


    const orderStatus = useSelector(selectOrderStatus);


    return (
        <div className="relative border border-salat-5a px-5 xs:py-9 sm:pt-14 pb-16 xs:mt-5 sm:mt-10">
            {orderStatus === Status.SUCCESS ? (
                <>
                    <h2 className=" font-amaticSC tracking-widest font-bold xs:text-base  sm:text-3xl  text-salat-30 ">Дякуємо</h2>
                    <p className="font-roboto text-lg md:text-xl text-text-color font-normal  mt-3 after:absolute after:content-bigOlives after:-rotate-45 after:-bottom-16 after:-right-8">
                        <span className="font-roboto  text-lg md:text-xl text-text-color font-normal"> {values}</span>
                        , Ваше замовлення успішно оформлене. Ми отримали ваше повідомлення та невдовзі зв'яжемося з вами для уточнення деталей. Будь ласка, очікуйте нашого дзвінка.
                    </p>
                </>
            ) : orderStatus === Status.ERROR ? (
                <>
                    <h2 className=" font-amaticSC tracking-widest font-bold xs:text-base  sm:text-3xl  text-red-500  "> Виникла якась помилка</h2>
                    <p className="font-roboto text-lg md:text-xl text-text-color font-normal  mt-3 after:absolute after:content-bigOlives after:-rotate-45 after:-bottom-16 after:-right-8">
                        <span className="font-roboto  text-lg md:text-xl text-text-color font-normal"> {values}</span>
                        ,  Виникла помилка при обробці замовлення. Будь ласка, спробуйте оформити замовлення ще раз.
                    </p>
                </>
            ) : (
                <>
                    <h2 className=" font-amaticSC tracking-widest font-bold xs:text-base  sm:text-3xl  text-yellow-500  ">Попередження</h2>
                    <p className="font-roboto text-lg md:text-xl text-text-color font-normal  mt-3 after:absolute after:content-bigOlives after:-rotate-45 after:-bottom-16 after:-right-8">
                        Виконується обробка замовлення.
                    </p>
                </>
            )}
        </div>
    );
};