
import aboutAsMobile from "@/assets/aboutAs-mobile.png";
import aboutAsTablet from "@/assets/aboutUs-tablet@1x.jpg";
import vegiesMobile from "@/assets/vegies@1x.jpg";
import vegiesTablet from "@/assets/vegies-tablet@1x.jpg";

import useMediaQuery from '@/hooks/useMediaQuery';
// import { motion } from "framer-motion";



export const AboutUs = () => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const flexCenter = 'justify-center items-center'

    return (
        <section id='пронас' className='pt-10 sm:px-10 md:px-[46px] m-auto '>
             {/* <motion.div
        className="mx-auto  items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
      > */}
            <h2 className=" font-amaticSC font-normal text-4xl text-text-color md:font-bold text-center">Про нас</h2>
            <ul className={isAboveSmallScreens ? `flex flex-col  mt-[93px] ${flexCenter}`: ` flex flex-col gap-12 text-center mt-[58px] `}>
                <li className='relative'>
                    {/* <div className={isAboveSmallScreens ? ` max-w-[209px] h-[357px] bg-salat-10  `: ` max-w-[320px] h-[209px]`}></div> */}
                    <div className={isAboveSmallScreens ? ` max-w-[209px] h-[357px] bg-salat-10  ` : ` bg-salat-10 w-full h-[280px]`}></div>
                    <img src={isAboveSmallScreens ? aboutAsTablet :aboutAsMobile} alt='Owner image' className={isAboveSmallScreens ? `absolute -top-12 left-24`:` absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `} />
                    <div className={isAboveSmallScreens  ? ` relative  p-6  -top-24 left-12 bg-white w-[624px] drop-shadow `: 'p-4 bg-white static -mt-24 '}>
                        <h3 className=" font-amaticSC font-normal text-2xl text-text-color md:font-bold sx:text-center ">Хто ми</h3>
                        <p className={`  font-roboto font-light text-xs sm:text-base  text-text-color `}> Ми пара: Таня та Рома та ми творці пряної оливкової олії R.olio.
                             Передісторія:
                            Так склалося в нашій парі, що готує у нас Рома, він дуже захоплений кулінарією і щоразу вигадує щось новеньке.
                            Напередодні минулого Нового року ми готували подарунки нашим друзям та родичам. Нам захотілося до подарунків додати щось незвичайне від себе.
                            І до нас прийшла ідея, Рома готував смачну пряну оливкову олію для своїх рецептів, додавав розмарин, чебрець, часник, різні види перців ... щоразу виходив новий неповторний смак.
                        </p>
                    </div>
                </li>
                <li className='relative'>
                <div className={isAboveSmallScreens ? `ml-auto max-w-[209px] h-[357px] bg-salat-10  ` : ` bg-salat-10 w-full h-[280px]`}></div>
                <img src={isAboveSmallScreens ? vegiesTablet : vegiesMobile} alt='Vegetables' className={isAboveSmallScreens ? `absolute -top-12 left-24`:` absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `} />
                <div className={isAboveSmallScreens  ? ` relative  p-6 -top-28 right-12 bg-white w-[624px] drop-shadow `: 'p-4 bg-white static -mt-24'}>
                <h3 className=" font-amaticSC font-normal text-2xl text-text-color md:font-bold sx:text-center ">Що ми робимо</h3>
                <p className={`   font-roboto font-light text-xs sm:text-base  text-text-color `}>І ми вирішили зробити таку олію, як додавання до подарунка. Треба сказати, що наші близькі оцінили презент та просили знову і знову зробити їм таку олію.
                            І з'явилася ідея: чому б не спробувати запустити таку олію у продаж?
                            Рома довго вивіряв рецепти, я розробляла дизайн етикеток та шукала постачальників.
                            І ось ми готові уявити його вам!
                            Ми намагалися зробити нашу олію максимально доступною, при цьому не втративши якість. Вартість пляшки (250мл) – всього 115грн.</p>
                    </div>
                </li>
            </ul>
            {/* </motion.div> */}

        </section>
    )
}