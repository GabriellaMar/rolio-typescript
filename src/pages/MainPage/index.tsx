
import { Products } from "@/components/Products/index"
import { AboutUs } from "@/components/AboutUs/index"
import { Reviews } from "@/components/Reviews"
// import { useEffect, useState } from "react"
import { ProductTitle, SelectedPage } from "@/shared/types"
import { Delivery } from "@/components/Delivery"
import { Footer } from "@/components/Footer"
import { Contacts } from "@/components/Contacts"
import { Offers } from "@/components/Offers"
// import { useEffect, useState } from "react"
import { Header } from "@/components/Header"
// import { useState } from 'react'

type Product = {
  id: string,
  title: ProductTitle
  img: string,
  description: string,
  details: string,
  price: number,
  // category: ProductCategory,
};

type MainPageProps = {
  products: Product[],
  isTopOfPage: boolean,
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void;


};

const MainPage: React.FC<MainPageProps> = ({ selectedPage, setSelectedPage, isTopOfPage,  products }) => {
  // const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Oil)
  //  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setIsTopOfPage(true);
  //       setSelectedPage(SelectedPage.Oil)
  //     }
  //     if (window.scrollY !== 0)
  //       setIsTopOfPage(false);
  //   }
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [setSelectedPage])

  // const products: Product[] = productsData;


  return (
    <>
     <Header 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
         isTopOfPage = {isTopOfPage}
      />
      <Offers products={products} />
      <Products products={products} />
      <AboutUs
      // selectedPage={selectedPage}
      //   setSelectedPage={setSelectedPage}
      />
      <Reviews />
      < Delivery />
      <Contacts />
      <Footer
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </>
  )
}

export default MainPage;