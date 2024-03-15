
import { Products } from "@/components/Products/index"
import { AboutUs } from "@/components/AboutUs/index"
import { Reviews } from "@/components/Reviews"
import { SelectedPage } from "@/shared/types"
import { Delivery } from "@/components/Delivery"
import { Footer } from "@/components/Footer"
import { Contacts } from "@/components/Contacts"
import { Offers } from "@/components/Offers"
import { Header } from "@/components/Header"
import { Product } from "@/redux/product/types"
import { ModalProvider } from "@/components/ModalContext"


type MainPageProps = {
  products: Product[],
  isTopOfPage: boolean,
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void;
};



const MainPage: React.FC<MainPageProps> = ({ selectedPage, setSelectedPage, isTopOfPage, products }) => {

  return (
    <>
      <Header
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <main>
        <Offers products={products} />
        <Products products={products} />
        <AboutUs />
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