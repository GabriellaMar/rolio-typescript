
// import { NavBar } from "@/components/NavBar/NavBar.tsx"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"
import { Header } from "./components/Header/Header"
import { OurProducts } from "./components/OurProducts/OurProducts"
import productsData from '@/products.json'

type Product = {
  id: string,
  title: string,
  img: string,
  description: string,
  details: string;
  price: number;
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
      <OurProducts products={products} />
    </div>
  )
}

export default App
