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

export const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between"
    // const flexColumn = "flex flex-col"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1366px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-20 w-full`}>
                <div className="bg-salat-30 rounded-full  p-8 -mt-8">
                    <img alt="logo image" src={Logo} width={153} />
                </div>
                {isAboveMediumScreens ? (
                    <NavList  
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}/>
                // <ul className={`${flexBetween} gap-8 text-sm  mx-20 font-messiri inline-block text-salat-50 `}>
                //     <li>
                //         <Link page='Масло'
                //             selectedPage={selectedPage}
                //             setSelectedPage={setSelectedPage}
                //         />
                //     </li>
                //     <li> 
                //         <Link page='Про нас'
                //         selectedPage={selectedPage}
                //         setSelectedPage={setSelectedPage}
                //     />
                //     </li>
                //     <li>
                //         <Link page='Відгуки'
                //             selectedPage={selectedPage}
                //             setSelectedPage={setSelectedPage}
                //         />
                //     </li>
                //     <li>
                //         <Link page='Доставка та оплата'
                //             selectedPage={selectedPage}
                //             setSelectedPage={setSelectedPage}
                //         />
                //     </li>
                //     <li>
                //         <Link page='Контакти'
                //             selectedPage={selectedPage}
                //             setSelectedPage={setSelectedPage}
                //         />
                //     </li>
                // </ul>
                 ) : (<button type="button" 
                className="bg-transparent"
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <Bars4Icon className="h-8 w-8 text-salat-50" />
                </button >)}
                <div>
                    <img src={basket} alt="" width={32}/>
                </div>
            </div>
            {/* Mobile MENU */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-salat-5 drop-shadow-xl px-[15px] py-16 pl-8"
                >
                     <button 
                     className="absolute top-5 right-5"
                     onClick={() => setIsMenuToggled(!isMenuToggled)}>
                     <XMarkIcon  className="h-8 w-8 text-salat-50 " />
            </button>
       
            <NavList
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}/>
            </div>
            )}
        </nav>
    )
}