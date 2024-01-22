
// import { NavBar } from "@/components/NavBar/NavBar.tsx"
import { useEffect, useState } from "react"
import {  SelectedPage } from "@/shared/types"
import { Header } from "@/components/Header/Header"
import { Offers } from "@/components/Offers/Offers"
import productsData from '@/products.json'
import { Products } from "@/components/Products/index"
import { AboutUs } from "@/components/AboutUs/index"
import { Reviews } from "./components/Reviews"
import { Delivery } from "./components/Delivery"
import { Contacts } from "./components/Contacts"
import { Footer } from "./components/Footer/Footer"

type Product = {
  id: string,
  title: string,
  img: string,
  description: string,
  details: string,
  price?: number,
  // category: ProductCategory,
};


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Oil)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Oil)
      }
      if (window.scrollY !== 0)
        setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products: Product[] = productsData;

  return (
    <div className='app'>
      <Header selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
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
    </div>
  )
}

export default App
