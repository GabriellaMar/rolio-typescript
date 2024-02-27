import bigLogo from "@/assets/bigLogo.png";
import { SelectedPage } from "@/shared/types";
import { Link } from "../NavBar/Link";
import useMediaQuery from "@/hooks/useMediaQuery";

import viber from '@/assets/viber-icon.png';
import facebook from '@/assets/facebook-icon.png';
import instagram from '@/assets/instagram-icon.png';
import telegram from '@/assets/telegram-icon.png';

type FooterProps = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;

}

export const Footer: React.FC<FooterProps> = ({ selectedPage, setSelectedPage }) => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const flexCenter = 'flex justify-center items-center'
    return (
        <footer className={`${flexCenter} flex-col sm:flex-row py-8 bg-salat-15`}>
            <img src={bigLogo} alt="Logo image" />
            <ul className={` text-white ${flexCenter} text-sm font-messiri ${isAboveSmallScreens ? ` flex-row gap-8  mx-20  ` : ` flex-col  gap-4`}`}>
                <li>
                    <Link page='Олія'
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </li>
                <li>
                    <Link page='Про нас'
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </li>
                <li>
                    <Link page='Відгуки'
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </li>
                <li>
                    <Link page='Доставка та оплата'
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </li>
                <li>
                    <Link page='Контакти'
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </li>
            </ul>
            <ul className={`${flexCenter}  sm:flex-row gap-[27px] mb-4 text-sm`}>

                <li className="flex  xs:gap-4 sm:gap-6">
                    <img src={facebook} alt='Facebook icon' />

                </li>
                <li className="flex xs:gap-4 sm:gap-6">
                    <img src={instagram} alt='Instagram icon' />

                </li>
                <li className="flex xs:gap-4 sm:gap-6 ">
                    <img src={telegram} alt='Telegram icon' />

                </li>
                <li className="flex xs:gap-4 sm:gap-6">
                    <img src={viber} alt='Phone icon' />

                </li>
            </ul>
        </footer>
    )

}