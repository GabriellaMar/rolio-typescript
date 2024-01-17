import { SelectedPage } from '@/shared/types';
import aboutAsMobile from "@/assets/aboutAs-mobile.png";
import aboutAsTablet from "@/assets/aboutUs-tablet@1x.jpg";
import vegies from "@/assets/vegies@1x.jpg";
import useMediaQuery from '@/hooks/useMediaQuery';
// import { motion } from "framer-motion";


type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;

}

export const AboutUs = ({ selectedPage, setSelectedPage }: Props) => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const flexCenter = 'justify-center items-center'

    return (
        <section id='пронас' className='pt-20  px-5 sm:px-10 md:px-[50px] m-auto '>
             {/* <motion.div
        className="mx-auto  items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
      > */}
            <h2 className=" font-amaticSC font-normal text-4xl text-text-color md:font-bold text-center">Про нас</h2>
            <ul className={isAboveSmallScreens ? `flex flex-col mt-[93px] ${flexCenter}`: `text-center mt-[56px] `}>
                <li className={` relative`}>
                    <div className={isAboveSmallScreens ? ` max-w-[209px] h-[357px] bg-salat-10  `: `m-auto max-w-[320px] h-[209px]`}></div>
                    <img src={isAboveSmallScreens ? aboutAsTablet :aboutAsMobile} alt='Owner image' className={isAboveSmallScreens ? `absolute -top-12 left-24`:` absolute -top-5 left-5  `} />
                    <div className={isAboveSmallScreens  ? ` relative border-2 p-6  -top-24 left-12 bg-white w-[624px] `: 'static mt-2'}>
                        <h3 className=" font-amaticSC font-normal text-2xl text-text-color md:font-bold text-center ">Хто ми</h3>
                        <p className={`  font-roboto font-light text-xs sm:text-base  text-text-color `}> Ми пара: Таня та Рома та ми творці пряної оливкової олії R.olio.
                             Передісторія:
                            Так склалося в нашій парі, що готує у нас Рома, він дуже захоплений кулінарією і щоразу вигадує щось новеньке.
                            Напередодні минулого Нового року ми готували подарунки нашим друзям та родичам. Нам захотілося до подарунків додати щось незвичайне від себе.
                            І до нас прийшла ідея, Рома готував смачну пряну оливкову олію для своїх рецептів, додавав розмарин, чебрець, часник, різні види перців ... щоразу виходив новий неповторний смак.
                        </p>
                    </div>
                </li>
                <li className='relative'>
                    <div className=' max-w-[320px] h-[209px] bg-salat-10 m-auto mt-8'></div>
                    <img src={vegies} alt='Owner image' className='m-auto absolute -top-5 left-5  ' />
                    <div>
                        <h3 className=" font-amaticSC font-normal text-2xl text-text-color md:font-bold text-center mt-4">Що ми робимо</h3>
                        <p className="font-roboto font-light text-xs sm:text-base  text-text-color mt-2 max-w-[320px]">І ми вирішили зробити таку олію, як додавання до подарунка. Треба сказати, що наші близькі оцінили презент та просили знову і знову зробити їм таку олію.
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