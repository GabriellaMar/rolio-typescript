
import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type LinkProps = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

export const Link: React.FC <LinkProps> = ({ page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage
  return (
   <AnchorLink
   className={`  ${selectedPage === lowerCasePage ? `text-red-100` : ``} transition duration-300 hover:text-red-100`}
   href={`#${lowerCasePage}`}
   onClick={() => {
    setSelectedPage(lowerCasePage)
  }}
   >
    {page}
    </AnchorLink>
  )
}

