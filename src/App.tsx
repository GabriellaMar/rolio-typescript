
// import { NavBar } from "@/components/NavBar/NavBar.tsx"
import { lazy, useEffect, useState } from "react"
// import {  SelectedPage } from "@/shared/types"
// import { Header } from "@/components/Header"
// import { Offers } from "@/components/Offers"
// import productsData from '@/products.json'
// import { Products } from "@/components/Products/index"
// import { AboutUs } from "@/components/AboutUs/index"
// import { Reviews } from "./components/Reviews"
// import { Delivery } from "./components/Delivery"
// import { Contacts } from "./components/Contacts"
// import { Footer } from "./components/Footer"
import { Route, Routes } from "react-router-dom"
// import Layout from "./components/Layout"

import {  SelectedPage } from "./shared/types"
import { useSelector } from "react-redux";
 import {  fetchProductsThunk } from "./redux/operations";


import { selectProductData } from "./redux/product/selectors";
import { useAppDispatch } from "./hooks/useAppDispatch";
// import { selectBasketItem, selectBasketItemById } from "./redux/basket/selectors";







const MainPage = lazy(() => import('./pages/MainPage/index'));
const BasketPage = lazy(() => import('./pages/BasketPage/index'));
// const ErrorPage = lazy(() => import('@/pages/ErrorPage'));




// type Product = {
//   id: string,
//   title: ProductTitle
//   img: string,
//   description: string,
//   details: string,
//   price: number,
// };


const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Oil)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const dispatch = useAppDispatch();
const { items } = useSelector(selectProductData);
 console.log(items)
  // const loading = useSelector((state) => state.products.loading);

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


useEffect(() => {
 
    dispatch(fetchProductsThunk());
}, [dispatch]);


 

  return (
    <Routes>
      {/* <Route path="/" element={<Layout
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />}> */}
 {/* </Route> */}
 
        <Route path="/" element={<MainPage
         isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          products={items}
        />} />
        <Route path="/basket" element={<BasketPage 
       
        />} />
     

   
      {/* <Route path="*" element={<ErrorPage />} /> */}

    </Routes>
  )


}

export default App
