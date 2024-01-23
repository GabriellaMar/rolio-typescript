// import { useState, useEffect } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
 
import smallLogo from "@/assets/smallLogo.png";
import bigLogo from "@/assets/bigLogo.png";
// import { Link } from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { NavList } from "./NavList";
import basket from '@/assets/basket.png'

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean,

}

export const NavBar = ({  isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1366px)");
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);


    return (
                <nav className={isAboveMediumScreens ? `${flexBetween}  top-0 z-20 ` : `flex items-center`}>
                <div className={`bg-salat-30 ${!isTopOfPage ? ` rounded-full  p-9 -mt-7  w-[100px] h-[100px] `:` rounded-full  p-8 -mt-8   w-[130px] h-[130px] sm:w-[145px] sm:h-[145px]`}`} >
                    <img alt="logo image" src={ isAboveSmallScreens ? bigLogo: smallLogo}  className={ isTopOfPage ?`m-auto pt-1`: `-mt-1`}/>
                </div>
                {isAboveMediumScreens ? (
               <NavList
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        
                ) : (<button type="button"
                    className="bg-transparent ml-auto  mr-6 sm:mr-8 mt-1"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <Bars4Icon className="h-10 w-10 text-salat-50" />
                </button >)}
               
                <div>
                    <img className="bg-transparent " src={basket} alt="" width={40} />
                </div>
              
            {/* Mobile MENU */}
            {!isAboveMediumScreens && isMenuToggled && (
               <div className="fixed right-0 bottom-0 z-100 h-screen w-[300px] bg-salat-60a drop-shadow-xl px-[15px] py-16 pl-8" >
                    <button
                        className="absolute top-5 right-5"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-8 w-8 text-salat-50 " />
                    </button>

                    <NavList
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                </div>
            )}
          </nav>
    )
}