
import { Products } from "@/components/Products/index"
import { AboutUs } from "@/components/AboutUs/index"
import { Reviews } from "@/components/Reviews"
// import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"
import { Delivery } from "@/components/Delivery"
import { Footer } from "@/components/Footer"
import { Contacts } from "@/components/Contacts"
import { Offers } from "@/components/Offers"
import { Header } from "@/components/Header"
import { Product } from "@/redux/product/types"
import { ModalProvider } from "@/components/ModalContext"
// import SliderComponent from "@/components/Offers/Slider"



type MainPageProps = {
  products: Product[],
  isTopOfPage: boolean,
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void;


};

// // const items = ['@/assets/image1.png', 'dgfrdgdfgfd', 'trhthgrtgrgt']
// const items = [{
//   img: saladImage,
// },
// {
//   img: italianImage,
// }
// ]


const MainPage: React.FC<MainPageProps> = ({ selectedPage, setSelectedPage, isTopOfPage,  products }) => {
  
 
  return (
    <>
     <Header 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
         isTopOfPage = {isTopOfPage} 
      />
      <main>
      <Offers 
         products={products} 
      // add={add} 
      // remove={remove}
      // addProduct={addProduct}
      />

{/* <SliderComponent  sliderProducts={productsData}/> */}
      <Products 
      products={products}
      // add={add}
      // remove={remove}
      // addProduct={addProduct}
       />
      <AboutUs
      // selectedPage={selectedPage}
      //   setSelectedPage={setSelectedPage}
      />
       <ModalProvider>
      <Reviews />
      </ModalProvider>
      < Delivery />
      <ModalProvider>
      <Contacts />
      </ModalProvider>
     
      <Footer
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      </main>
    </>
  )
}

export default MainPage;