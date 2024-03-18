import { SelectedPage } from "@/shared/types";
import { Link } from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";

type NavListProps = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;


}

export const NavList: React.FC <NavListProps> = ({ selectedPage, setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1366px)");
    const flexBetween = "flex items-center justify-between"
    return (
        <ul className={` text-salat-50 ${isAboveMediumScreens ? `${flexBetween} gap-8 text-lg mx-20 font-messiri ` : `flex flex-col items-center gap-4 text-sm font-messiri`}`}>
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
    )
}