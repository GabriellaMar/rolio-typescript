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
    <section id='контакти' className="  pt-20 pb-6 px-5 sm:px-10 md:px-[50px] ">

      <h2 className=" font-amaticSC font-normal text-4xl text-text-color md:font-bold text-center">Контакти</h2>
      <div className="relative mt-[72px] m-auto sm:w-full ">
        <div className={isAboveSmallScreens ? ` max-w-[209px] h-[424px] bg-salat-10  ` : ` bg-salat-10 max-w-[320px] h-[280px] m-auto`}></div>
        <img src={isAboveSmallScreens ? oilBottleTablet : oilBottleMobile} alt='Owner image' className={isAboveSmallScreens ? `absolute -top-8 left-28 ` : ` absolute -top-8 left-5  `} />
        <div className="p-10 bg-white absolute -mt-44 ml-36 drop-shadow-xl">
          <ul className="flex flex-col gap-[27px] mb-4 ">
            <li className="flex gap-6">
              <img src={phone} alt='Phone icon' />
              <p>+38 (066) 11-43-558</p>
            </li>
            <li className="flex gap-6 ">
              <img src={facebook} alt='Facebook icon' />
              <p>https://www.facebook.com/r.olio8/</p>
            </li>
            <li className="flex gap-6">
              <img src={instagram} alt='Instagram icon' />
              <p>https://www.instagram.com/r.olio_/</p>
            </li>
            <li className="flex gap-6">
              <img src={telegram} alt='Telegram icon' />
              <p>https://t.me/r_olio</p>
            </li>
          </ul>
          <Buttons title={"Для салата"} text=" Написати нам" size={220} padding={2} />
        </div>
      </div>
    </section>
  )
}