import { SelectedPage } from "@/shared/types";
import { Link } from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    // page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

export const NavList = ({ selectedPage, setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1366px)");
    const flexBetween = "flex items-center justify-between"

  return (
    // <ul className={`${flexBetween} gap-8 text-sm  mx-20 font-messiri inline-block text-salat-50 `}>
         <ul className={isAboveMediumScreens ? `${flexBetween} gap-8 text-sm mx-20 font-messiri text-salat-50` : 'flex flex-col gap-4 text-sm font-messiri text-salat-50'}>
    <li>
        <Link page='Масло'
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