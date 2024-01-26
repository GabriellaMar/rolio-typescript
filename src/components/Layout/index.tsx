// import { Suspense, useEffect, useState } from "react"
// import { Outlet } from 'react-router-dom';
// import { Header } from "@/components/Header/index"
// import { SelectedPage } from "@/shared/types.js";

// type HeaderProps = {
//     isTopOfPage: boolean,
//     selectedPage: SelectedPage,
//     setSelectedPage: (value: SelectedPage) => void;
// }


// const Layout: React.FC <HeaderProps> = ({selectedPage, setSelectedPage}) => {

//     const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  
//     useEffect(() => {
//       const handleScroll = () => {
//         if (window.scrollY === 0) {
//           setIsTopOfPage(true);
//           setSelectedPage(SelectedPage.Oil)
//         }
//         if (window.scrollY !== 0)
//           setIsTopOfPage(false);
//       }
//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll)
//     }, [setSelectedPage]) 

//   return (
//     <>
//       <Header 
//         selectedPage={selectedPage}
//         setSelectedPage={setSelectedPage}
//          isTopOfPage = {isTopOfPage}
//       />
//       <main>
//         <Suspense fallback={<div>Loading</div>}>
//           <Outlet />
//         </Suspense>
//       </main>

//     </>
//   )
// }

// export default Layout;