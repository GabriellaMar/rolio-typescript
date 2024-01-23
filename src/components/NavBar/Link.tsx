// import React from 'react'
import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
   
}

export const Link = ({ page, selectedPage, setSelectedPage}: Props) => {
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

