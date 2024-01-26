
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
import { useState } from "react"
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
  const [addProduct, setAddProduct] =useState<number>(0);

  

  const add = ()=>{
    setAddProduct((prevState)=>prevState + 1)
  }

  const remove =() => {
    setAddProduct((prevState) => prevState- 1)
  }

  return (
    <>
     <Header 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
         isTopOfPage = {isTopOfPage}
         addProduct={addProduct}
      />
      <main>
      <Offers 
      products={products} 
      add={add} 
      remove={remove}
      addProduct={addProduct}
      />
      <Products 
      products={products}
      add={add}
      remove={remove}
      addProduct={addProduct}
       />
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
      </main>
    </>
  )
}

export default MainPage;