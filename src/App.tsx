
// import { NavBar } from "@/components/NavBar/NavBar.tsx"
import { lazy, useEffect, useState } from "react"
// import {  SelectedPage } from "@/shared/types"
// import { Header } from "@/components/Header"
// import { Offers } from "@/components/Offers"
import productsData from '@/products.json'
// import { Products } from "@/components/Products/index"
// import { AboutUs } from "@/components/AboutUs/index"
// import { Reviews } from "./components/Reviews"
// import { Delivery } from "./components/Delivery"
// import { Contacts } from "./components/Contacts"
// import { Footer } from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"

import { ProductTitle, SelectedPage } from "./shared/types"



const MainPage = lazy(() => import('@/pages/MainPage'));
const BasketPage = lazy(() => import('@/pages/BasketPage'));
// const ErrorPage = lazy(() => import('@/pages/ErrorPage'));




type Product = {
  id: string,
  title: ProductTitle
  img: string,
  description: string,
  details: string,
  price: number,
  // category: ProductCategory,
};


const App: React.FC = () => {
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

  const products: Product[] = productsData as Product[];

  return (
    <Routes>
      <Route path="/" element={<Layout
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />}>

        <Route path="/" element={<MainPage
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          products={products}
        />} />
   <Route path="/basket" element={<BasketPage products={products} />} />
      </Route>

   
      {/* <Route path="*" element={<ErrorPage />} /> */}

    </Routes>
  )
  {/* <div className='app'>
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
    </div> */}


}

export default App
