import { SelectedPage } from "@/shared/types";
import { NavBar } from "../NavBar"


type HeaderProps = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;

   
}


export const Header: React.FC <HeaderProps> =({isTopOfPage,  selectedPage, setSelectedPage }) => {
    const headerBackground = isTopOfPage ? "" : "bg-salat-5a ";
  
    return (
        <header className={` ${headerBackground} fixed z-10 w-full px-5 pb-2 sm:px-10 md:px-[46px] `}>
             <NavBar 
             selectedPage={selectedPage}
             setSelectedPage={setSelectedPage}
              isTopOfPage = {isTopOfPage}
             />
             
        </header>
    )
}