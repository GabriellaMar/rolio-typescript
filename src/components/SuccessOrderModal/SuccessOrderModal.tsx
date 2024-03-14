

type SuccessMessageProps = {
    //  isBasketEmpty: boolean ,
  };

  export const SuccessMessage: React.FC<SuccessMessageProps> = () => {
    return (
        // <div>
        //     {isBasketEmpty ? (
        //         <>
        //             <div className="m-auto ">
        //                 <p className="text-center font-amaticSC font-bold text-4xl text-salat-50 mt-12">Наразі ваша корзина порожня.</p>
        //                 <p className="font-amaticSC text-xl font-normal text-text-color text-center mt-2">Почніть додавати товари, щоб насолоджуватися покупками!</p>
        //             </div>
        //             <img src={emptyBasket} className="m-auto w-1/2" />
        //         </>
        //     ) : (
                <div>
                    <h2>Дякуємо</h2>
                    <p>
                        <span> $Ім'я$,</span>
                        Ваше замовлення успішно оформлено. Ми отримали ваше повідомлення та невдовзі зв'яжемося з вами для уточнення деталей. Будь ласка, очікуйте нашого дзвінка.
                    </p>
                </div>
            // )}
        // </div>
    );
};