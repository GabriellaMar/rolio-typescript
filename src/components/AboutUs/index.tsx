
import aboutUsMobile from "@/assets/uboutUs-mobile@1x.jpg";
import aboutUsTablet from "@/assets/aboutUs-tablet@1x.jpg";
import vegiesMobile from "@/assets/vegies@1x.jpg";
import vegiesTablet from "@/assets/vegies-tablet@1x.jpg";

import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from "framer-motion";



export const AboutUs = () => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 320px)");
    const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
    const isAboveLargeScreens = useMediaQuery("(min-width: 1366px)");


    return (
        <section id='пронас' className='py-10 md:py-20 sm:px-10  m-auto '>
            <h2 className=" font-amaticSC font-normal text-4xl sm:text-5xl text-text-color md:font-bold text-center mb-20">Про нас</h2>
            <ul className="flex flex-col gap-24 items-center ">
                <motion.div
                     initial='hidden'
                     whileInView='visible'
                     viewport={{once: true, amount: 0.5}}
                     transition={{duration: 2,}}
                     variants={{
                      hidden: {opacity: 0, x: 50},
                      visible: {opacity: 1, x: 0},
                     }}
                >
                    <li className={`relative ${isAboveLargeScreens && `flex `}`}>
                        <div className={` ${isAboveSmallScreens && `square-mobile m-auto`} ${isAboveMediumScreens && ` square-tablet`} ${isAboveLargeScreens && `square-desktop`} ${isAboveLargeScreens && `ml-0 `}`}></div>
                        <img src={isAboveMediumScreens ? aboutUsTablet : aboutUsMobile} alt='Owner image' className={`${isAboveSmallScreens && `aboutImg-mobile`}  ${isAboveLargeScreens && `aboutImg-desktop`}`} />
                        <div className={` bg-white drop-shadow ${isAboveSmallScreens && `m-auto aboutUs-mobile `} ${isAboveMediumScreens && `aboutUs-tablet`} ${isAboveLargeScreens && ` aboutUs-desktop`}`}>
                            <h3 className=" font-amaticSC font-normal text-2xl text-text-color md:font-bold sx:text-center ">Хто ми</h3>
                            <p className={`  font-roboto font-light text-xs sm:text-base  text-text-color `}> Ми пара: Таня та Рома та ми творці пряної оливкової олії R.olio.
                                Передісторія:
                                Так склалося в нашій парі, що готує у нас Рома, він дуже захоплений кулінарією і щоразу вигадує щось новеньке.
                                Напередодні минулого Нового року ми готували подарунки нашим друзям та родичам. Нам захотілося до подарунків додати щось незвичайне від себе.
                                І до нас прийшла ідея, Рома готував смачну пряну оливкову олію для своїх рецептів, додавав розмарин, чебрець, часник, різні види перців ... щоразу виходив новий неповторний смак.
                            </p>
                        </div>
                    </li>
                </motion.div >
                <motion.div
                     initial='hidden'
                     whileInView='visible'
                     viewport={{once: true, amount: 0.5}}
                     transition={{duration: 2,}}
                     variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                     }}
                >
                    <li className="relative">
                        <div className={` ${isAboveSmallScreens && `square-mobile m-auto`} ${isAboveMediumScreens && ` doing-square-tablet`}  ${isAboveLargeScreens && `doing-square-desktop`}`}></div>
                        <img src={isAboveMediumScreens ? vegiesTablet : vegiesMobile} alt='Owner image' className={`${isAboveSmallScreens && `aboutImg-mobile`}  ${isAboveLargeScreens && `doingImg-desktop`}`} />
                        <div className={` bg-white drop-shadow ${isAboveSmallScreens && `m-auto aboutUs-mobile `} ${isAboveMediumScreens && `about-doing-tablet`} ${isAboveLargeScreens && `about-doing-desktop`}`}>
                            <h3 className=" font-amaticSC font-normal text-2xl text-text-color md:font-bold sx:text-center ">Що ми робимо</h3>
                            <p className={`  font-roboto font-light text-xs sm:text-base  text-text-color `}> І ми вирішили зробити таку олію, як додавання до подарунка. Можна сказати, що наші близькі оцінили презент та просили знову й знову зробити їм таку олію.
                                І з'явилася ідея: чому б не спробувати запустити таку олію у продаж?
                                Рома довго вивіряв рецепти, я розробляла дизайн етикеток та шукала постачальників.
                                І ось ми готові уявити його вам!
                                Ми намагалися зробити нашу олію максимально доступною, при цьому не втративши якість. Вартість пляшки (250мл) – всього 115грн.
                            </p>
                        </div>
                    </li>
                </motion.div >
            </ul>
        </section>
    )
}