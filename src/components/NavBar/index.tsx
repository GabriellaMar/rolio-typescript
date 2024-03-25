
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

import smallLogo from "@/assets/smallLogo.png";
import bigLogo from "@/assets/bigLogo.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { NavList } from "./NavList";
import basket from '@/assets/basket.png'
import { Link } from "react-router-dom";
import { selectBasketItem } from "@/redux/basket/selectors";
import { useSelector } from "react-redux";
import { calculateProductItems } from "@/services/services";
import { motion } from "framer-motion";



type NavBarProps = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean,
}

export const NavBar: React.FC<NavBarProps> = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1366px)");
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const { basketItems } = useSelector(selectBasketItem);


    const totalItems: number = calculateProductItems(basketItems);

   
    const handleMobileMenu = ()=>{
        setIsMenuToggled(!isMenuToggled)
        document.body.style.overflow = isMenuToggled ? 'auto' : 'hidden';
    }


    const variantsOpen = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 1, y: -100 },
    }

    const variantsClose = {
        visible: { opacity: 0, y: -100 },
        hidden: { opacity: 1, y: 0 },
    }
    return (
        <nav className={isAboveMediumScreens ? `${flexBetween}   z-20 ` : `flex items-center`}>
            <Link to='/'>
                <div className={`bg-salat-30 rounded-full  ${!isTopOfPage ? ` not-scaled-logo   p-9 -mt-7  ` : ` scaled-logo  p-8 -mt-8   sm:w-[145px] sm:h-[145px]`}`} >
                    <img alt="logo image" src={isAboveSmallScreens ? bigLogo : smallLogo} className={` m-auto ${isTopOfPage ? `-mt-0` : `-mt-1`}`} />
                </div>
            </Link>
            {isAboveMediumScreens ? (
                <NavList
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />

            ) : (<button type="button"
                className="bg-transparent ml-auto  mr-6 sm:mr-8 mt-1"
                onClick={handleMobileMenu}>
                <Bars4Icon className="h-10 w-10 text-salat-50 hover-icon" />
            </button >)
            }
            <div className="relative">
                <Link to="/basket">
                    {totalItems > 0 && (
                        <div className="absolute -top-5 left-7 w-6 h-6 bg-red-700 rounded-full">
                            <p className="font-roboto font-normal text-white text-center">{totalItems}</p>
                        </div>
                    )}
                    <img className="bg-transparent hover-icon -mt-2" src={basket} alt="Basket icon" width={40} />
                </Link>

            </div>

            {/* Mobile MENU */}
            {!isAboveMediumScreens && isMenuToggled && (
                <motion.div className={`toggle-mob-menu fixed top-0 right-0 bottom-0 z-100 h-screen w-[300px] bg-salat-60a drop-shadow-xl px-[15px] py-28 pl-8 `}
                
                initial="hidden"
                animate={isMenuToggled ? "visible" : "hidden"}
                transition={{ duration: 0.2 }}
                variants={isMenuToggled ? variantsOpen : variantsClose}
                >
                    <button
                        className="absolute top-8 right-10"
                        onClick={handleMobileMenu}>
                        <XMarkIcon className="h-8 w-8 text-salat-50 " />
                    </button>

                    <NavList
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </motion.div>
            )}
        </nav>
    )
}