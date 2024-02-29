import oilBottleMobile from "@/assets/oilBottle-mobile@1x.jpg";
import oilBottleTablet from "@/assets/oilButtle-tablet@1x.jpg";
import phone from '@/assets/phone.png';
import facebook from '@/assets/facebook.png';
import instagram from '@/assets/instagram.png';
import telegram from '@/assets/telegram.png';

import useMediaQuery from "@/hooks/useMediaQuery";
import { Buttons } from "../Buttons";




export const Contacts = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <section id='контакти' className="  pt-10 pb-14  sm:px-10 md:px-[46px] ">

      <h2 className=" font-amaticSC font-normal text-4xl text-text-color md:font-bold text-center">Контакти</h2>
      <div className="relative mt-[72px]  max-w-[768px] m-auto">
        <div className={isAboveSmallScreens ? ` max-w-[209px] h-[424px] bg-salat-10  ` : ` bg-salat-10 w-full h-[280px]`}></div>
        <img src={isAboveSmallScreens ? oilBottleTablet : oilBottleMobile} alt='Owner image' className={isAboveSmallScreens ? `absolute -top-8 left-28 ` : `w-[300px] absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `} />
        <div className={isAboveSmallScreens ? `m-auto p-10 bg-white  -mt-44 ml-36 drop-shadow w-[390px]`: `px-2.5 py-3  m-auto -mt-20 bg-white drop-shadow w-[300px]`}>
          <ul className="flex flex-col gap-[27px] mb-4 text-sm">
            <li className="flex xs:gap-4 sm:gap-6">
              <img src={phone} alt='Phone icon' />
              <p >+38 (066) 11-43-558</p>
            </li>
            <li className="flex  xs:gap-4 sm:gap-6">
              <img src={facebook} alt='Facebook icon' />
              <p >https://www.facebook.com/r.olio8/</p>
            </li>
            <li className="flex xs:gap-4 sm:gap-6">
              <img src={instagram} alt='Instagram icon' />
              <p>https://www.instagram.com/r.olio_/</p>
            </li>
            <li className="flex xs:gap-4 sm:gap-6 ">
              <img src={telegram} alt='Telegram icon' />
              <p>https://t.me/r_olio</p>
            </li>
          </ul>
          <Buttons title={"Для салата"} text=" Написати нам" size={200} padding={2} />
        </div>
      </div>
    </section>
  )
}