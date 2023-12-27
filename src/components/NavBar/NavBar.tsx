// import { useState, useEffect } from "react";
// import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";

// type Props = {

// }

export const NavBar = () => {
    const flexBetween = "flex items-center justify-between"
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-20 w-full`}>
                <div className={`${flexBetween} mx-auto`}>
                    {/* <div className={`${flexBetween}   `}> */}
                    <div className="bg-salat-30 rounded-full  p-8 -mt-8">
                        <img alt="logo image" src={Logo} width={153}/>
                        </div>
                        {/* <div className={`${flexBetween} w-full`}> */}
                            <ul className={`${flexBetween} gap-8 text-sm  mx-20 `}>
                                <li>Масло</li>
                                <li>Про нас</li>
                                <li>Відгуки</li>
                                <li>Доставка та оплата</li>
                                <li>Контакти</li>
                            </ul>
                            <div>БУРГЕР</div>
                        {/* </div> */}
                    {/* </div> */}
                    <div>КОШИК</div>
                </div>
            </div>
        </nav>
    )
}