
import { lazy, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux";
import { fetchBasketItemsThunk, fetchOReviewThunk, fetchProductsThunk } from "./redux/operations";
import { selectProductData } from "./redux/product/selectors";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { SelectedPage } from "./shared/types";


const MainPage = lazy(() => import('./pages/MainPage/index'));
const BasketPage = lazy(() => import('./pages/BasketPage/index'));


const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Oil)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { items } = useSelector(selectProductData);


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
    dispatch(fetchBasketItemsThunk());
    dispatch(fetchOReviewThunk())
  }, [dispatch]);


  return (
    <Routes>
      <Route path="/" element={<MainPage
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        products={items}
      />} />
      <Route path="/basket" element={<BasketPage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  )


}

export default App
