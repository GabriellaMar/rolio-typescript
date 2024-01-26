import { SelectedPage } from "@/shared/types";
import { NavBar } from "../NavBar"

type HeaderProps = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
    addProduct: number,
}


export const Header: React.FC <HeaderProps> =({isTopOfPage,  selectedPage, addProduct, setSelectedPage }) => {
    const headerBackground = isTopOfPage ? "" : "bg-salat-5a";
    return (
        <header className={` ${headerBackground} fixed z-20  w-full px-5 pb-2 sm:px-10 md:px-[50px]`}>
             <NavBar 
             selectedPage={selectedPage}
             setSelectedPage={setSelectedPage}
              isTopOfPage = {isTopOfPage}
              addProduct={addProduct}
             />
             
        </header>
    )
}