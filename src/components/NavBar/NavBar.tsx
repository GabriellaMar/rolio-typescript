// import { useState, useEffect } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
 
import Logo from "@/assets/logo.png";
// import { Link } from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { NavList } from "./NavList";
import basket from '@/assets/basket.png'

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

export const NavBar = ({  selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1366px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);


    return (
                <nav className={isAboveMediumScreens ? `${flexBetween}  top-0 z-20  border border-indigo-600` : `flex items-center`}>
                <div className="bg-salat-30 rounded-full  p-8 -mt-8  w-[128px] sm:w-[180px]">
                    <img alt="logo image" src={Logo}  className=" w-[134px] mx-auto"/>
                </div>
                {isAboveMediumScreens ? (
                    <NavList
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                ) : (<button type="button"
                    className="bg-transparent ml-auto  mr-6 sm:mr-8 mt-1"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <Bars4Icon className="h-10 w-10 text-salat-50" />
                </button >)}
               
                <div>
                    <img className="bg-transparent mr" src={basket} alt="" width={40} />
                </div>
              
            {/* Mobile MENU */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-100 h-full w-[300px] bg-salat-5 drop-shadow-xl px-[15px] py-16 pl-8">
                    <button
                        className="absolute top-5 right-5"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-8 w-8 text-salat-50 " />
                    </button>

                    <NavList
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                </div>
            )}
          </nav>
    )
}