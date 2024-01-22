import bigLogo from "@/assets/bigLogo.png"; 
import { NavList } from "../NavBar/NavList";
import { SelectedPage } from "@/shared/types";
type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
    // isTopOfPage: boolean,

}

export const Footer = ({   selectedPage, setSelectedPage }: Props)=>{
    return (
        <footer className="py-8 bg-salat-15">
            <img src={bigLogo} alt="Logo image"/>
            <NavList
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />

        </footer>
    )

}