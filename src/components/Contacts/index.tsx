import oilBottleMobile from "@/assets/oilBottle-mobile@1x.jpg";
import oilBottleTablet from "@/assets/oilButtle-tablet@1x.jpg";
import phone from '@/assets/phone.png';
import facebook from '@/assets/facebook.png';
import instagram from '@/assets/instagram.png';
import telegram from '@/assets/telegram.png';
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Buttons } from "../Buttons";
import { useContext } from "react";
import { ModalContext } from "../ModalContext";
import { ContactModal } from "./ContactsModal";



export const Contacts = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 320px)");
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const isAboveLargeScreens = useMediaQuery("(min-width: 1366px)");
  const { showModal, toggleModal } = useContext(ModalContext);

  return (
    <section id='контакти' className=" xs:py-10 sm:py-20  sm:px-10 md:px-[46px] flex flex-col  items-center">
      <h2 className=" font-amaticSC font-normal text-4xl sm:text-5xl text-text-color md:font-bold text-center mb-20 ">Контакти</h2>
      <motion.div className={`relative ] ${isAboveLargeScreens && `flex `}`}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
       <div className={` ${isAboveSmallScreens && `square-contact-mobile m-auto`} ${isAboveMediumScreens && ` square-contact-tablet`} ${isAboveLargeScreens && `square-contact-desktop`} ${isAboveLargeScreens && `ml-0 `}`}></div>
       <img src={isAboveMediumScreens ?  oilBottleTablet : oilBottleMobile} alt='Owner image' className={`${isAboveSmallScreens && `contactImg-mobile`}  ${isAboveLargeScreens && `contactImg-desktop`}`} />
       <div className={` bg-white drop-shadow  ${isAboveSmallScreens && ` contact-info-mobile m-auto `} ${isAboveMediumScreens && `contact-info-tablet`} ${isAboveLargeScreens && ` contact-info-desktop`}`}>
          <ul className="flex flex-col gap-[27px] mb-4 text-sm ">
            <li className="flex xs:gap-4 sm:gap-6">
              <img src={phone} alt='Phone icon' />
              <p >+38 (066) 11-43-558</p>
            </li>
            <li>
              <a className=' flex xs:gap-4 sm:gap-6 ' href="https://www.facebook.com/r.olio8/" target="_blank" rel="noopener noreferrer nofollow">
                <img src={facebook} alt='Facebook icon' />
                <p >https://www.facebook.com/r.olio8/</p>
              </a>
            </li>
            <li>
              <a className=' flex xs:gap-4 sm:gap-6 ' href="https://www.instagram.com/r.olio_/" target="_blank" rel="noopener noreferrer nofollow">
                <img src={instagram} alt='Instagram icon' />
                <p>https://www.instagram.com/r.olio_/</p>
              </a>
            </li>
            <li>
              <a className=' flex xs:gap-4 sm:gap-6 ' href="https://t.me/r_olio" target="_blank" rel="noopener noreferrer nofollow">
                <img src={telegram} alt='Telegram icon' />
                <p>https://t.me/r_olio</p>
              </a>
            </li>
          </ul>
          <Buttons title={"Для салату"} text=" Написати нам" size={200} padding={2} onClick={toggleModal} />
        </div>
      </motion.div>
      {showModal && <ContactModal closeModal={toggleModal} />}
    </section>
  )
}